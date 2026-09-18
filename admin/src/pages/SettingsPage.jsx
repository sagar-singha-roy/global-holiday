import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/client";
import {
  User,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const SettingsPage = () => {
  const { user, isAdmin, isManager, isSales } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await api.put("/auth/change-password", {
        currentPassword,
        newPassword,
      });
      if (res.data.success) {
        setMessage("Your password has been successfully updated.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile & Security Settings</h1>
          <p className="page-subtitle">
            Manage your account credentials and view your active role
            authorization
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Profile Card */}
        <div className="card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(245, 158, 11, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F59E0B",
              }}
            >
              <User size={24} />
            </div>
            <div>
              <h3 style={{ color: "#0b2230" }}>{user?.name}</h3>
              <p style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>
                {user?.email}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              fontSize: "0.875rem",
            }}
          >
            <div
              style={{
                padding: "0.75rem",
                background: "#f0f6fb",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9CA3AF",
                  marginBottom: "0.2rem",
                }}
              >
                Current Role
              </div>
              <div
                style={{
                  color: "#0b2230",
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
              >
                {user?.role}
              </div>
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#f0f6fb",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9CA3AF",
                  marginBottom: "0.2rem",
                }}
              >
                Assigned Package Scope
              </div>
              <div style={{ color: "#F59E0B", fontWeight: 600 }}>
                {isAdmin
                  ? "All Packages (Unrestricted)"
                  : `${user?.assignedPackages?.length || 0} Packages Assigned`}
              </div>
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#f0f6fb",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9CA3AF",
                  marginBottom: "0.2rem",
                }}
              >
                Security Protocol
              </div>
              <div
                style={{
                  color: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <ShieldCheck size={16} /> JWT Encrypted Session
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Card */}
        <div className="card">
          <h3 style={{ color: "#0b2230", marginBottom: "0.5rem" }}>
            Update Password
          </h3>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
            }}
          >
            Ensure your account is using a secure password
          </p>

          {message && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem",
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: "8px",
                color: "#34D399",
                fontSize: "0.85rem",
                marginBottom: "1rem",
              }}
            >
              <CheckCircle2 size={16} />
              <span>{message}</span>
            </div>
          )}

          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem",
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "8px",
                color: "#F87171",
                fontSize: "0.85rem",
                marginBottom: "1rem",
              }}
            >
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handlePasswordChange}>
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="input"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
