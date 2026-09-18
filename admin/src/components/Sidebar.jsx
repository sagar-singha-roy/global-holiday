import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  LayoutDashboard,
  Compass,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Shield,
  Briefcase,
  UserCheck,
} from "lucide-react";

const Sidebar = () => {
  const { user, logout, isAdmin, isManager } = useAuth();

  const getRoleBadge = () => {
    if (isAdmin) {
      return (
        <span className="badge badge-admin">
          <Shield size={12} /> Administrator
        </span>
      );
    }
    if (isManager) {
      return (
        <span className="badge badge-manager">
          <Briefcase size={12} /> Operations Manager
        </span>
      );
    }
    return (
      <span className="badge badge-sales">
        <UserCheck size={12} /> Sales & Marketing
      </span>
    );
  };

  return (
    <aside
      style={{
        width: "260px",
        backgroundColor: "#ffffff",
        borderRight: "1px solid rgba(31, 122, 168, 0.16)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        flexShrink: 0,
        boxShadow: "0 0 20px rgba(11, 34, 48, 0.03)",
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          padding: "1.5rem",
          borderBottom: "1px solid rgba(31, 122, 168, 0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background:
                "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 50%, #11577a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#ffffff",
              fontSize: "1.1rem",
              boxShadow: "0 4px 10px rgba(31, 122, 168, 0.25)",
            }}
          >
            GH
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "-0.01em",
                color: "#0b2230",
              }}
            >
              GLOBAL HOLIDAYS
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#bf8624",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              CRM PORTAL
            </div>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>{getRoleBadge()}</div>
      </div>

      {/* Nav items */}
      <nav
        style={{
          flex: 1,
          padding: "1.25rem 0.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.35rem",
        }}
      >
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: isActive ? "#ffffff" : "#2c495e",
            background: isActive
              ? "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 100%)"
              : "transparent",
            boxShadow: isActive
              ? "0 4px 12px rgba(31, 122, 168, 0.25)"
              : "none",
            textDecoration: "none",
            transition: "all 0.15s ease",
          })}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/packages"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: isActive ? "#ffffff" : "#2c495e",
            background: isActive
              ? "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 100%)"
              : "transparent",
            boxShadow: isActive
              ? "0 4px 12px rgba(31, 122, 168, 0.25)"
              : "none",
            textDecoration: "none",
            transition: "all 0.15s ease",
          })}
        >
          <Compass size={18} />
          <span>{isAdmin ? "All Packages" : "Assigned Packages"}</span>
        </NavLink>

        <NavLink
          to="/leads"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: isActive ? "#ffffff" : "#2c495e",
            background: isActive
              ? "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 100%)"
              : "transparent",
            boxShadow: isActive
              ? "0 4px 12px rgba(31, 122, 168, 0.25)"
              : "none",
            textDecoration: "none",
            transition: "all 0.15s ease",
          })}
        >
          <MessageSquare size={18} />
          <span>Leads & Inquiries</span>
        </NavLink>

        {/* Users management - Admin only */}
        {isAdmin && (
          <NavLink
            to="/users"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: isActive ? "#ffffff" : "#2c495e",
              background: isActive
                ? "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 100%)"
                : "transparent",
              boxShadow: isActive
                ? "0 4px 12px rgba(31, 122, 168, 0.25)"
                : "none",
              textDecoration: "none",
              transition: "all 0.15s ease",
            })}
          >
            <Users size={18} />
            <span>Staff & Access</span>
          </NavLink>
        )}

        <NavLink
          to="/settings"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: isActive ? "#ffffff" : "#2c495e",
            background: isActive
              ? "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 100%)"
              : "transparent",
            boxShadow: isActive
              ? "0 4px 12px rgba(31, 122, 168, 0.25)"
              : "none",
            textDecoration: "none",
            transition: "all 0.15s ease",
          })}
        >
          <Settings size={18} />
          <span>Profile & Security</span>
        </NavLink>
      </nav>

      {/* User profile footer */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderTop: "1px solid rgba(31, 122, 168, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f8fafc",
        }}
      >
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
      </div>
    </aside>
  );
};

export default Sidebar;
