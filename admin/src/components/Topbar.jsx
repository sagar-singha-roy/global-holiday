import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Menu,
  ExternalLink,
  Bell,
  ChevronDown,
  User,
  KeyRound,
  Users,
  LogOut,
} from "lucide-react";

const Topbar = ({ onToggleSidebar, sidebarCollapsed }) => {
  const { user, logout, isAdmin } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getUserInitials = (name) => {
    if (!name) return "GH";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="topbar-icon-btn"
          onClick={onToggleSidebar}
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label="Toggle side panel"
        >
          <Menu size={18} />
        </button>
      </div>

      <div className="topbar-right">
        <button
          type="button"
          className="topbar-icon-btn"
          title="Notifications"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="topbar-badge-dot" />
        </button>

        <div className="topbar-divider" />

        {/* User Icon & CRM Dropdown */}
        <div className="user-dropdown-container" ref={dropdownRef}>
          <button
            type="button"
            className={`user-profile-btn ${dropdownOpen ? "active" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="user-avatar-badge">
              {getUserInitials(user?.name)}
            </div>
            <div className="user-profile-meta">
              <span className="user-meta-name">{user?.name || "Staff"}</span>
              <span className="user-meta-role">{user?.role || "User"}</span>
            </div>
            <ChevronDown
              size={14}
              className={`chevron-icon ${dropdownOpen ? "open" : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className="crm-user-menu">
              {/* Header profile card */}
              <div className="crm-user-menu-header">
                <div className="crm-user-avatar-large">
                  {getUserInitials(user?.name)}
                </div>
                <div className="crm-user-info">
                  <div className="crm-user-name">{user?.name}</div>
                  <div className="crm-user-email">{user?.email}</div>
                  <div className="crm-user-status">
                    <span className="status-indicator-dot" />
                    <span className="crm-role-tag">{user?.role}</span>
                  </div>
                </div>
              </div>

              <div className="crm-menu-divider" />

              {/* Menu items */}
              <div className="crm-menu-list">
                <Link
                  to="/settings"
                  className="crm-menu-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <User size={16} className="crm-item-icon" />
                  <div className="crm-item-text">
                    <span className="crm-item-title">My Profile</span>
                    <span className="crm-item-desc">
                      Account details & personal info
                    </span>
                  </div>
                </Link>

                <Link
                  to="/settings"
                  className="crm-menu-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <KeyRound size={16} className="crm-item-icon" />
                  <div className="crm-item-text">
                    <span className="crm-item-title">Security & Password</span>
                    <span className="crm-item-desc">
                      Change password & credentials
                    </span>
                  </div>
                </Link>

                {isAdmin && (
                  <Link
                    to="/users"
                    className="crm-menu-item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Users size={16} className="crm-item-icon" />
                    <div className="crm-item-text">
                      <span className="crm-item-title">Staff Management</span>
                      <span className="crm-item-desc">
                        Manage team accounts & access
                      </span>
                    </div>
                  </Link>
                )}

                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crm-menu-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <ExternalLink size={16} className="crm-item-icon" />
                  <div className="crm-item-text">
                    <span className="crm-item-title">Live Website</span>
                    <span className="crm-item-desc">
                      Customer portal preview
                    </span>
                  </div>
                </a>
              </div>

              <div className="crm-menu-divider" />

              {/* Logout option */}
              <div className="crm-menu-footer">
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    logout();
                  }}
                  className="crm-logout-btn"
                >
                  <LogOut size={16} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
