import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  LayoutDashboard,
  Compass,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = ({ collapsed }) => {
  const { user, logout, isAdmin, hasAccess } = useAuth();

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Brand Header */}
      <div className="sidebar-header">
        <Link to="/" className="sidebar-brand-link">
          <img
            src="/images/logo-icon.png"
            alt="Global Holidays Logo"
            className="sidebar-logo-img"
          />
          {!collapsed && (
            <div className="sidebar-brand-text">
              <div className="sidebar-brand-title">GLOBAL HOLIDAYS</div>
              <div className="sidebar-brand-sub">CRM PORTAL</div>
            </div>
          )}
        </Link>
      </div>

      {/* Nav items */}
      <nav className="sidebar-nav">
        {hasAccess("dashboard") && (
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
            data-label="Dashboard"
          >
            <LayoutDashboard size={18} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>
        )}

        {hasAccess("packages") && (
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
            data-label="Tour Packages"
          >
            <Compass size={18} />
            {!collapsed && <span>Tour Packages</span>}
          </NavLink>
        )}

        {hasAccess("leads") && (
          <NavLink
            to="/leads"
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
            data-label="Leads & Inquiries"
          >
            <MessageSquare size={18} />
            {!collapsed && <span>Leads & Inquiries</span>}
          </NavLink>
        )}

        {(isAdmin || hasAccess("users")) && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
            data-label="Staff & Access"
          >
            <Users size={18} />
            {!collapsed && <span>Staff & Access</span>}
          </NavLink>
        )}

        {hasAccess("settings") && (
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
            data-label="Profile & Security"
          >
            <Settings size={18} />
            {!collapsed && <span>Profile & Security</span>}
          </NavLink>
        )}
      </nav>

      {/* User profile footer */}
      <div className="sidebar-footer">
        {!collapsed ? (
          <>
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#0b2230",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {user?.name}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#5f7c91",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {user?.email}
              </div>
            </div>
            <button
              onClick={logout}
              title="Sign Out"
              style={{
                background: "none",
                border: "none",
                color: "#5f7c91",
                cursor: "pointer",
                padding: "0.4rem",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogOut size={18} />
            </button>
          </>
        ) : (
          <button
            onClick={logout}
            title="Sign Out"
            style={{
              background: "none",
              border: "none",
              color: "#ef4444",
              cursor: "pointer",
              padding: "0.4rem",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogOut size={18} />
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
