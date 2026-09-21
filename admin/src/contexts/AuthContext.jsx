import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/client';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('gh_crm_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('gh_crm_token');
      if (storedToken) {
        try {
          const res = await api.get('/auth/me');
          if (res.data.success) {
            setUser(res.data.user);
          }
        } catch (err) {
          console.error('Failed to restore auth session:', err);
          localStorage.removeItem('gh_crm_token');
          localStorage.removeItem('gh_crm_user');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    if (res.data.success) {
      const { token: newToken, user: newUser } = res.data;
      localStorage.setItem('gh_crm_token', newToken);
      localStorage.setItem('gh_crm_user', JSON.stringify(newUser));
      setToken(newToken);
      setUser(newUser);
      return { success: true };
    }
    return { success: false, message: 'Invalid response from server' };
  };

  const logout = () => {
    localStorage.removeItem('gh_crm_token');
    localStorage.removeItem('gh_crm_user');
    setToken(null);
    setUser(null);
    window.location.href = '/login';
  };

  const refreshUser = async () => {
    try {
      const res = await api.get('/auth/me');
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem('gh_crm_user', JSON.stringify(res.data.user));
      }
    } catch (err) {
      console.error('Refresh user error:', err);
    }
  };

  const isAdmin = user?.role === 'admin';
  const isManager = user?.role === 'manager';
  const isSales = user?.role === 'sales';

  const hasAccess = (moduleKey) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    const perms = user.permissions || ['dashboard', 'packages', 'leads', 'settings'];
    return perms.includes(moduleKey);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        refreshUser,
        isAdmin,
        isManager,
        isSales,
        hasAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
