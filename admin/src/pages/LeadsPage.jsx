import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/client";
import {
  Plus,
  Search,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  Users,
  CheckCircle,
  X,
  FileText,
  Clock,
  Send,
  Trash2,
} from "lucide-react";

const LeadsPage = () => {
  const { user, isAdmin } = useAuth();
  const [leads, setLeads] = useState([]);
  const [packages, setPackages] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modals
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [noteText, setNoteText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    packageInterest: "",
    packageId: "",
    travelDates: "",
    travellers: 2,
    budget: "",
    message: "",
    priority: "medium",
    status: "new",
    assignedTo: "",
    source: "admin",
  });

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await api.get("/leads");
      if (res.data.success) {
        setLeads(res.data.data);
      }
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDependencies = async () => {
    try {
      const [pkgRes, usrRes] = await Promise.all([
        api.get("/packages"),
        isAdmin ? api.get("/users") : Promise.resolve({ data: { data: [] } }),
      ]);
      if (pkgRes.data.success) setPackages(pkgRes.data.data);
      if (usrRes.data?.success) setUsersList(usrRes.data.data);
    } catch (err) {
      console.error("Error fetching dependencies:", err);
    }
  };

  useEffect(() => {
    fetchLeads();
    fetchDependencies();
  }, [isAdmin]);

  const handleCreateLead = async (e) => {
    e.preventDefault();
    try {
      await api.post("/leads", formData);
      setIsCreateModalOpen(false);
      fetchLeads();
      setFormData({
        name: "",
        phone: "",
        email: "",
        packageInterest: "",
        packageId: "",
        travelDates: "",
        travellers: 2,
        budget: "",
        message: "",
        priority: "medium",
        status: "new",
        assignedTo: "",
        source: "admin",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Error creating inquiry");
    }
  };

  const handleStatusChange = async (leadId, newStatus) => {
    try {
      await api.put(`/leads/${leadId}`, { status: newStatus });
      fetchLeads();
      if (selectedLead && selectedLead._id === leadId) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error updating status");
    }
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    try {
      const res = await api.post(`/leads/${selectedLead._id}/notes`, {
        text: noteText,
      });
      if (res.data.success) {
        setSelectedLead({ ...selectedLead, notes: res.data.data });
        setNoteText("");
        fetchLeads();
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error adding note");
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm("Delete this inquiry permanently?")) return;
    try {
      await api.delete(`/leads/${id}`);
      if (selectedLead?._id === id) setSelectedLead(null);
      fetchLeads();
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting lead");
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      (lead.email && lead.email.toLowerCase().includes(search.toLowerCase())) ||
      (lead.packageInterest &&
        lead.packageInterest.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Customer Inquiries & Leads</h1>
          <p className="page-subtitle">
            {isAdmin
              ? "Tracking all client enquiries, booking statuses, and staff follow-ups"
              : "Client inquiries assigned to you or related to your package portfolio"}
          </p>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn btn-primary"
        >
          <Plus size={16} />
          <span>New Lead / Inquiry</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ position: "relative", flex: 1, minWidth: "240px" }}>
          <input
            type="text"
            className="input"
            placeholder="Search leads by customer name, phone, or package..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: "2.5rem" }}
          />
          <Search
            size={16}
            style={{
              position: "absolute",
              left: "0.85rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6B7280",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["all", "new", "contacted", "quoted", "converted", "lost"].map(
            (st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className="btn btn-secondary"
                style={{
                  fontSize: "0.75rem",
                  padding: "0.4rem 0.75rem",
                  textTransform: "capitalize",
                  borderColor: statusFilter === st ? "#F59E0B" : undefined,
                  color: statusFilter === st ? "#F59E0B" : undefined,
                }}
              >
                {st}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Table & Detail Split View */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: selectedLead ? "1fr 400px" : "1fr",
          gap: "1.5rem",
        }}
      >
        {/* Table View */}
        <div>
          {loading ? (
            <div
              style={{ textAlign: "center", padding: "3rem", color: "#9CA3AF" }}
            >
              Loading inquiries...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div
              className="card"
              style={{ textAlign: "center", padding: "3rem" }}
            >
              <MessageSquare
                size={36}
                color="#6B7280"
                style={{ margin: "0 auto 1rem" }}
              />
              <h3 style={{ color: "#0b2230" }}>No Leads Found</h3>
              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                There are no customer inquiries matching your criteria.
              </p>
            </div>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Package of Interest</th>
                    <th>Dates / Guests</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                    <th style={{ textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead._id}
                      style={{
                        backgroundColor:
                          selectedLead?._id === lead._id
                            ? "rgba(245, 158, 11, 0.05)"
                            : undefined,
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td>
                        <div style={{ fontWeight: 700, color: "#0b2230" }}>
                          {lead.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#9CA3AF",
                            display: "flex",
                            gap: "0.5rem",
                            marginTop: "0.2rem",
                          }}
                        >
                          <span>{lead.phone}</span>
                          {lead.email && <span>• {lead.email}</span>}
                        </div>
                      </td>
                      <td>
                        <div style={{ color: "#F59E0B", fontWeight: 600 }}>
                          {lead.packageInterest ||
                            lead.packageId?.title ||
                            "General Custom Package"}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                          Source: {lead.source}
                        </div>
                      </td>
                      <td style={{ fontSize: "0.825rem", color: "#2c495e" }}>
                        <div>{lead.travelDates || "Flexible"}</div>
                        <div style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                          {lead.travellers} travellers{" "}
                          {lead.budget ? `• ${lead.budget}` : ""}
                        </div>
                      </td>
                      <td>
                        <select
                          className="select"
                          value={lead.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) =>
                            handleStatusChange(lead._id, e.target.value)
                          }
                          style={{
                            fontSize: "0.75rem",
                            padding: "0.25rem 0.5rem",
                            width: "auto",
                          }}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td>
                        <span
                          style={{ fontSize: "0.825rem", color: "#2c495e" }}
                        >
                          {lead.assignedTo?.name || "Unassigned"}
                        </span>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {isAdmin && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteLead(lead._id);
                            }}
                            className="btn btn-danger"
                            style={{ padding: "0.35rem 0.5rem" }}
                            title="Delete Lead"
                          >
                            <Trash2 size={13} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Lead Details & Follow-up Drawer */}
        {selectedLead && (
          <div
            className="card"
            style={{ height: "fit-content", position: "sticky", top: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(31, 122, 168, 0.16)",
                marginBottom: "1rem",
              }}
            >
              <div>
                <h3 style={{ color: "#0b2230" }}>{selectedLead.name}</h3>
                <span className={`badge badge-status-${selectedLead.status}`}>
                  {selectedLead.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#9CA3AF",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.85rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#2c495e",
                }}
              >
                <Phone size={14} color="#F59E0B" />
                <a
                  href={`tel:${selectedLead.phone}`}
                  style={{ color: "#0b2230", textDecoration: "none" }}
                >
                  {selectedLead.phone}
                </a>
              </div>

              {selectedLead.email && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#2c495e",
                  }}
                >
                  <Mail size={14} color="#F59E0B" />
                  <a
                    href={`mailto:${selectedLead.email}`}
                    style={{ color: "#0b2230", textDecoration: "none" }}
                  >
                    {selectedLead.email}
                  </a>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#2c495e",
                }}
              >
                <Calendar size={14} color="#F59E0B" />
                <span>Dates: {selectedLead.travelDates || "Flexible"}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#2c495e",
                }}
              >
                <Users size={14} color="#F59E0B" />
                <span>Travellers: {selectedLead.travellers}</span>
              </div>

              {selectedLead.message && (
                <div
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.75rem",
                    background: "#f0f6fb",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#9CA3AF",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Client Message:
                  </div>
                  <div style={{ color: "#0b2230", lineHeight: 1.4 }}>
                    {selectedLead.message}
                  </div>
                </div>
              )}
            </div>

            {/* Notes & Activity Log */}
            <div
              style={{
                marginTop: "1.5rem",
                borderTop: "1px solid rgba(31, 122, 168, 0.16)",
                paddingTop: "1rem",
              }}
            >
              <h4
                style={{
                  color: "#0b2230",
                  fontSize: "0.9rem",
                  marginBottom: "0.75rem",
                }}
              >
                Follow-up Notes ({selectedLead.notes?.length || 0})
              </h4>

              <form
                onSubmit={handleAddNote}
                style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
              >
                <input
                  type="text"
                  className="input"
                  placeholder="Add a client follow-up note..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  style={{ fontSize: "0.8rem" }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: "0.5rem 0.75rem" }}
                >
                  <Send size={14} />
                </button>
              </form>

              <div
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {selectedLead.notes?.map((n, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f0f6fb",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                    }}
                  >
                    <div style={{ color: "#0b2230" }}>{n.text}</div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#9CA3AF",
                        marginTop: "0.25rem",
                      }}
                    >
                      {n.addedByName || "Staff"} •{" "}
                      {new Date(n.addedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Lead Modal */}
      {isCreateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 style={{ color: "#0b2230" }}>Record Customer Inquiry</h3>
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

            <form onSubmit={handleCreateLead}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Customer Name</label>
                  <input
                    type="text"
                    className="input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="input"
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email (Optional)</label>
                    <input
                      type="email"
                      className="input"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Package of Interest</label>
                  <select
                    className="select"
                    value={formData.packageId}
                    onChange={(e) => {
                      const selected = packages.find(
                        (p) => p._id === e.target.value,
                      );
                      setFormData({
                        ...formData,
                        packageId: e.target.value,
                        packageInterest: selected ? selected.title : "",
                      });
                    }}
                  >
                    <option value="">-- Select Tour Package --</option>
                    {packages.map((p) => (
                      <option key={p._id} value={p._id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div className="form-group">
                    <label className="form-label">Travel Dates</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g. October 2026"
                      value={formData.travelDates}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          travelDates: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Travellers</label>
                    <input
                      type="number"
                      min="1"
                      className="input"
                      value={formData.travellers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          travellers: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                {isAdmin && usersList.length > 0 && (
                  <div className="form-group">
                    <label className="form-label">Assign To Staff Member</label>
                    <select
                      className="select"
                      value={formData.assignedTo}
                      onChange={(e) =>
                        setFormData({ ...formData, assignedTo: e.target.value })
                      }
                    >
                      <option value="">-- Unassigned --</option>
                      {usersList.map((u) => (
                        <option key={u._id} value={u._id}>
                          {u.name} ({u.role})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">
                    Inquiry Notes / Requirements
                  </label>
                  <textarea
                    rows={3}
                    className="textarea"
                    placeholder="Special requests, hotel preferences, dietary..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
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
                  Save Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;
