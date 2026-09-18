import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const Topbar = () => {
  const { user } = useAuth();

  return (
    <header
      style={{
        height: '64px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(31, 122, 168, 0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        flexShrink: 0,
        boxShadow: '0 2px 8px rgba(11, 34, 48, 0.03)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <ShieldCheck size={18} color="#1f7aa8" />
        <span style={{ fontSize: '0.875rem', color: '#5f7c91' }}>
          Role Authorization:{' '}
          <strong
            style={{
              color: '#0b2230',
              textTransform: 'capitalize',
              fontWeight: 700,
            }}
          >
            {user?.role === 'admin'
              ? 'Administrator (Full Access)'
              : user?.role === 'manager'
              ? 'Manager (Assigned Scope)'
              : 'Sales & Marketing (Assigned Scope)'}
          </strong>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.825rem',
            fontWeight: 600,
            color: '#1f7aa8',
            textDecoration: 'none',
            padding: '0.45rem 0.9rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(31, 122, 168, 0.08)',
            border: '1px solid rgba(31, 122, 168, 0.25)',
            transition: 'all 0.2s ease',
          }}
        >
          <span>Live User Portal</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </header>
  );
};

export default Topbar;
