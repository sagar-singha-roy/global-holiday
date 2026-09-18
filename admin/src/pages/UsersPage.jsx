import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/client";
import {
  Users,
  UserPlus,
  Shield,
  Briefcase,
  UserCheck,
  Check,
  X,
  PackageCheck,
  Trash2,
  Edit2,
  Lock,
} from "lucide-react";

const UsersPage = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modals
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [assignedPkgIds, setAssignedPkgIds] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "sales",
    phone: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [usrRes, pkgRes] = await Promise.all([
        api.get("/users"),
        api.get("/packages"),
      ]);
      if (usrRes.data.success) setUsers(usrRes.data.data);
      if (pkgRes.data.success) setPackages(pkgRes.data.data);
    } catch (err) {
      console.error("Failed to load users/packages:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users", formData);
      setIsCreateModalOpen(false);
      fetchData();
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "sales",
        phone: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error creating user");
    }
  };

  const handleOpenAssign = (user) => {
    setSelectedUser(user);
    const existingIds = (user.assignedPackages || []).map((p) =>
      typeof p === "object" ? p._id : p,
    );
    setAssignedPkgIds(existingIds);
    setIsAssignModalOpen(true);
  };

  const handleTogglePackage = (pkgId) => {
    if (assignedPkgIds.includes(pkgId)) {
      setAssignedPkgIds(assignedPkgIds.filter((id) => id !== pkgId));
    } else {
      setAssignedPkgIds([...assignedPkgIds, pkgId]);
    }
  };

  const handleSaveAssignments = async () => {
    try {
      await api.post(`/users/${selectedUser._id}/assign`, {
        packageIds: assignedPkgIds,
      });
      setIsAssignModalOpen(false);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Error saving assignments");
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
            Manage user accounts, assign roles (Admin, Manager, Sales), and
            designate specific package visibility
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
        <div style={{ textAlign: "center", padding: "3rem", color: "#9CA3AF" }}>
          Loading staff list...
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Staff Member</th>
                <th>Role</th>
                <th>Assigned Packages</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>
                    <div style={{ fontWeight: 700, color: "#0b2230" }}>
                      {u.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                      {u.email}
                    </div>
                  </td>
                  <td>{getRoleBadge(u.role)}</td>
                  <td>
                    {u.role === "admin" ? (
                      <span
                        style={{
                          fontSize: "0.825rem",
                          color: "#F87171",
                          fontWeight: 600,
                        }}
                      >
                        All Packages (Full Access)
                      </span>
                    ) : (
                      <div>
                        <span
                          style={{
                            fontSize: "0.825rem",
                            color: "#F59E0B",
                            fontWeight: 600,
                          }}
                        >
                          {u.assignedPackages?.length || 0} Assigned Packages
                        </span>
                        {u.assignedPackages?.length > 0 && (
                          <div
                            style={{
                              fontSize: "0.75rem",
                              color: "#9CA3AF",
                              marginTop: "0.2rem",
                            }}
                          >
                            {u.assignedPackages
                              .map((p) => p.title || p.slug)
                              .slice(0, 2)
                              .join(", ")}
                            {u.assignedPackages.length > 2 && " + more"}
                          </div>
                        )}
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
                      }}
                    >
                      {u.role !== "admin" && (
                        <button
                          onClick={() => handleOpenAssign(u)}
                          className="btn btn-secondary"
                          style={{
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.75rem",
                          }}
                          title="Assign Packages"
                        >
                          <PackageCheck size={14} color="#F59E0B" />
                          <span>Assign Packages</span>
                        </button>
                      )}

                      {u._id !== currentUser?.id && (
                        <button
                          onClick={() => handleDeleteUser(u._id)}
                          className="btn btn-danger"
                          style={{ padding: "0.4rem 0.6rem" }}
                          title="Delete User"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Assign Packages Modal */}
      {isAssignModalOpen && selectedUser && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <div>
                <h3 style={{ color: "#0b2230" }}>
                  Assign Packages to {selectedUser.name}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                  Role:{" "}
                  <strong
                    style={{ textTransform: "capitalize", color: "#F59E0B" }}
                  >
                    {selectedUser.role}
                  </strong>{" "}
                  — Selected packages will be visible to this user
                </p>
              </div>
              <button
                onClick={() => setIsAssignModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#9CA3AF",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="modal-body"
              style={{ maxHeight: "420px", overflowY: "auto" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {packages.map((pkg) => {
                  const isChecked = assignedPkgIds.includes(pkg._id);
                  return (
                    <label
                      key={pkg._id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        backgroundColor: isChecked
                          ? "rgba(245, 158, 11, 0.1)"
                          : "#1F2937",
                        border: isChecked
                          ? "1px solid rgba(245, 158, 11, 0.4)"
                          : "1px solid rgba(255, 255, 255, 0.05)",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleTogglePackage(pkg._id)}
                        style={{
                          accentColor: "#F59E0B",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "#0b2230",
                            fontSize: "0.85rem",
                          }}
                        >
                          {pkg.title}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                          {pkg.duration} • {pkg.destination}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsAssignModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveAssignments}
              >
                Save Package Assignments ({assignedPkgIds.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create User Modal */}
      {isCreateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 style={{ color: "#0b2230" }}>Create Staff Account</h3>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#9CA3AF",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateUser}>
              <div className="modal-body">
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
                  <label className="form-label">Temporary Password</label>
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
                  <label className="form-label">Staff Role</label>
                  <select
                    className="select"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="sales">
                      Sales & Marketing (Assigned packages & leads only)
                    </option>
                    <option value="manager">
                      Manager (Portfolio packages & branch management)
                    </option>
                    <option value="admin">
                      Administrator (Full unconstrained system access)
                    </option>
                  </select>
                </div>
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
