import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/client";
import Pagination from "../components/Pagination";
import {
  Users,
  UserPlus,
  Shield,
  Briefcase,
  UserCheck,
  Check,
  X,
  Trash2,
  Lock,
  Edit2,
} from "lucide-react";

const AVAILABLE_COMPONENTS = [
  { key: "dashboard", label: "Dashboard Overview", desc: "View analytics, booking stats, and revenue summary" },
  { key: "packages", label: "Tour Packages", desc: "Manage destinations, packages, itinerary, and pricing" },
  { key: "leads", label: "Leads & Inquiries", desc: "Access CRM lead pipeline, customer quotes, and statuses" },
  { key: "users", label: "Staff & Access Control", desc: "Manage user accounts, roles, and permissions" },
  { key: "settings", label: "Profile & Security", desc: "Update personal profile, credentials, and settings" },
];

const DEFAULT_STAFF_PERMS = ["dashboard", "packages", "leads", "settings"];

const UsersPage = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  // Modals
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "sales",
    phone: "",
    permissions: DEFAULT_STAFF_PERMS,
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "sales",
    password: "",
    isActive: true,
    permissions: DEFAULT_STAFF_PERMS,
  });

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const usrRes = await api.get("/users", { params: { limit, skip } });
      if (usrRes.data.success) {
        setUsers(usrRes.data.data);
        setTotal(
          usrRes.data.total !== undefined
            ? usrRes.data.total
            : usrRes.data.data.length,
        );
      }
    } catch (err) {
      console.error("Failed to load users:", err);
    } finally {
      setLoading(false);
    }
  }, [limit, skip]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleToggleCreatePerm = (key) => {
    setFormData((prev) => {
      const perms = prev.permissions || [];
      if (perms.includes(key)) {
        return { ...prev, permissions: perms.filter((k) => k !== key) };
      }
      return { ...prev, permissions: [...perms, key] };
    });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        permissions:
          formData.role === "admin"
            ? ["dashboard", "packages", "leads", "users", "settings"]
            : formData.permissions,
      };
      await api.post("/users", payload);
      setIsCreateModalOpen(false);
      fetchData();
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "sales",
        phone: "",
        permissions: DEFAULT_STAFF_PERMS,
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error creating user");
    }
  };

  const handleOpenEditUser = (user) => {
    setSelectedUser(user);
    setEditFormData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      role: user.role || "sales",
      password: "",
      isActive: user.isActive !== undefined ? user.isActive : true,
      permissions: user.permissions && user.permissions.length > 0 ? user.permissions : DEFAULT_STAFF_PERMS,
    });
    setIsEditModalOpen(true);
  };

  const handleToggleEditFormPerm = (key) => {
    setEditFormData((prev) => {
      const perms = prev.permissions || [];
      if (perms.includes(key)) {
        return { ...prev, permissions: perms.filter((k) => k !== key) };
      }
      return { ...prev, permissions: [...perms, key] };
    });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;
    try {
      const payload = {
        name: editFormData.name,
        email: editFormData.email,
        phone: editFormData.phone,
        role: editFormData.role,
        isActive: editFormData.isActive,
        permissions:
          editFormData.role === "admin"
            ? ["dashboard", "packages", "leads", "users", "settings"]
            : editFormData.permissions,
      };
      if (editFormData.password) {
        payload.password = editFormData.password;
      }
      await api.put(`/users/${selectedUser._id}`, payload);
      setIsEditModalOpen(false);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Error updating user details");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to remove this staff account?"))
      return;
    try {
      await api.delete(`/users/${id}`);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting user");
    }
  };

  const getRoleBadge = (role) => {
    if (role === "admin") {
      return (
        <span className="badge badge-admin">
          <Shield size={12} /> Admin
        </span>
      );
    }
    if (role === "manager") {
      return (
        <span className="badge badge-manager">
          <Briefcase size={12} /> Manager
        </span>
      );
    }
    return (
      <span className="badge badge-sales">
        <UserCheck size={12} /> Sales
      </span>
    );
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Staff & Role Access Control</h1>
          <p className="page-subtitle">
            Manage staff accounts, assign roles (Admin, Manager, Sales), and
            control module/component access permissions
          </p>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn btn-primary"
        >
          <UserPlus size={16} />
          <span>Add Staff Member</span>
        </button>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem", color: "#64748B" }}>
          Loading staff list...
        </div>
      ) : (
        <>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Staff Member</th>
                  <th>Role</th>
                  <th>Component Access</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>
                      <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                        {u.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {u.email}
                        {u.phone && <span> • {u.phone}</span>}
                      </div>
                    </td>
                    <td>{getRoleBadge(u.role)}</td>
                    <td>
                      {u.role === "admin" ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            fontSize: "0.8rem",
                            color: "#b91c1c",
                            fontWeight: 700,
                            backgroundColor: "rgba(220, 38, 38, 0.08)",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "6px",
                            border: "1px solid rgba(220, 38, 38, 0.2)",
                          }}
                        >
                          <Shield size={13} /> Full Access (All Components)
                        </span>
                      ) : (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", maxWidth: "340px" }}>
                          {(u.permissions && u.permissions.length > 0
                            ? u.permissions
                            : DEFAULT_STAFF_PERMS
                          ).map((permKey) => {
                            const comp = AVAILABLE_COMPONENTS.find((c) => c.key === permKey);
                            return (
                              <span
                                key={permKey}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  fontSize: "0.72rem",
                                  fontWeight: 600,
                                  color: "var(--text-secondary)",
                                  backgroundColor: "var(--bg-surface-elevated)",
                                  border: "1px solid var(--border-color)",
                                  padding: "0.18rem 0.5rem",
                                  borderRadius: "4px",
                                }}
                              >
                                {comp ? comp.label : permKey}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </td>
                    <td>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          fontSize: "0.75rem",
                          color: u.isActive ? "#10B981" : "#EF4444",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: u.isActive ? "#10B981" : "#EF4444",
                          }}
                        />
                        {u.isActive ? "Active" : "Deactivated"}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          onClick={() => handleOpenEditUser(u)}
                          className="btn btn-secondary"
                          style={{
                            padding: "0.45rem",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "6px",
                          }}
                          title="Edit Staff Member & Component Access"
                          aria-label="Edit Staff Member"
                        >
                          <Edit2 size={15} color="var(--accent-teal)" />
                        </button>

                        {u._id !== currentUser?.id && (
                          <button
                            onClick={() => handleDeleteUser(u._id)}
                            className="btn btn-danger"
                            style={{
                              padding: "0.45rem",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "6px",
                            }}
                            title="Delete Staff Member"
                            aria-label="Delete Staff Member"
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            total={total}
            limit={limit}
            skip={skip}
            onLimitChange={(newLimit) => {
              setLimit(newLimit);
              setSkip(0);
            }}
            onSkipChange={(newSkip) => setSkip(newSkip)}
          />
        </>
      )}

      {/* Edit Staff Member Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 style={{ color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Edit2 size={18} color="var(--accent-teal)" />
                Edit Staff Member
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdateUser}>
              <div className="modal-body" style={{ maxHeight: "500px", overflowY: "auto" }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="input"
                    value={editFormData.name}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="e.g. +91 98765 43210"
                    value={editFormData.phone}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    className="input"
                    value={editFormData.email}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    New Password <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "normal" }}>(leave blank to keep unchanged)</span>
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter new password (optional)"
                    value={editFormData.password}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, password: e.target.value })
                    }
                    minLength={6}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Role</label>
                  <select
                    className="select"
                    value={editFormData.role}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, role: e.target.value })
                    }
                  >
                    <option value="admin">Administrator</option>
                    <option value="manager">Manager</option>
                    <option value="sales">Sales & Marketing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Account Status</label>
                  <select
                    className="select"
                    value={editFormData.isActive ? "active" : "inactive"}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        isActive: e.target.value === "active",
                      })
                    }
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Deactivated</option>
                  </select>
                </div>

                {/* Component Access Options for Manager & Sales */}
                {editFormData.role !== "admin" ? (
                  <div className="form-group" style={{ marginTop: "1rem" }}>
                    <label className="form-label" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>Component Access Permissions</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--accent-teal)", fontWeight: 600 }}>
                        {editFormData.permissions?.length || 0} selected
                      </span>
                    </label>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                      Choose which CRM components this {editFormData.role === "manager" ? "Manager" : "Sales person"} can see and use:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {AVAILABLE_COMPONENTS.map((comp) => {
                        const isChecked = editFormData.permissions?.includes(comp.key);
                        return (
                          <label
                            key={comp.key}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.75rem",
                              padding: "0.6rem 0.85rem",
                              borderRadius: "6px",
                              backgroundColor: isChecked
                                ? "rgba(31, 122, 168, 0.08)"
                                : "var(--bg-surface-elevated)",
                              border: isChecked
                                ? "1px solid var(--accent-teal)"
                                : "1px solid var(--border-color)",
                              cursor: "pointer",
                              transition: "all 0.15s ease",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleEditFormPerm(comp.key)}
                              style={{
                                accentColor: "var(--accent-teal)",
                                width: "16px",
                                height: "16px",
                                marginTop: "0.15rem",
                              }}
                            />
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontWeight: 600,
                                  color: "var(--text-primary)",
                                  fontSize: "0.825rem",
                                }}
                              >
                                {comp.label}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.72rem",
                                  color: "var(--text-muted)",
                                }}
                              >
                                {comp.desc}
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(220, 38, 38, 0.08)",
                      border: "1px solid rgba(220, 38, 38, 0.2)",
                      fontSize: "0.8rem",
                      color: "#b91c1c",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <Shield size={16} />
                    <span>Administrator account has full access to all system components.</span>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}



      {/* Create User Modal */}
      {isCreateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 style={{ color: "var(--text-primary)" }}>Create Staff Account</h3>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateUser}>
              <div className="modal-body" style={{ maxHeight: "500px", overflowY: "auto" }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g. Priyo Sen"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="priyo@globalholidays.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Minimum 6 characters"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    minLength={6}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Role</label>
                  <select
                    className="select"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="admin">Administrator</option>
                    <option value="manager">Manager</option>
                    <option value="sales">Sales & Marketing</option>
                  </select>
                </div>

                {/* Component Access Options for Manager & Sales */}
                {formData.role !== "admin" ? (
                  <div className="form-group" style={{ marginTop: "1rem" }}>
                    <label className="form-label" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>Component Access Permissions</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--accent-teal)", fontWeight: 600 }}>
                        {formData.permissions?.length || 0} selected
                      </span>
                    </label>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                      Choose which CRM components this {formData.role === "manager" ? "Manager" : "Sales person"} can see and use:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {AVAILABLE_COMPONENTS.map((comp) => {
                        const isChecked = formData.permissions?.includes(comp.key);
                        return (
                          <label
                            key={comp.key}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.75rem",
                              padding: "0.6rem 0.85rem",
                              borderRadius: "6px",
                              backgroundColor: isChecked
                                ? "rgba(31, 122, 168, 0.08)"
                                : "var(--bg-surface-elevated)",
                              border: isChecked
                                ? "1px solid var(--accent-teal)"
                                : "1px solid var(--border-color)",
                              cursor: "pointer",
                              transition: "all 0.15s ease",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleCreatePerm(comp.key)}
                              style={{
                                accentColor: "var(--accent-teal)",
                                width: "16px",
                                height: "16px",
                                marginTop: "0.15rem",
                              }}
                            />
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontWeight: 600,
                                  color: "var(--text-primary)",
                                  fontSize: "0.825rem",
                                }}
                              >
                                {comp.label}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.72rem",
                                  color: "var(--text-muted)",
                                }}
                              >
                                {comp.desc}
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(220, 38, 38, 0.08)",
                      border: "1px solid rgba(220, 38, 38, 0.2)",
                      fontSize: "0.8rem",
                      color: "#b91c1c",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <Shield size={16} />
                    <span>Administrator account has full access to all system components.</span>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
