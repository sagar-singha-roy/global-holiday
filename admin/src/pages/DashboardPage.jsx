import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/client";
import {
  Compass,
  Users,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { user, isAdmin, isManager, isSales } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/dashboard/stats");
        if (res.data.success) {
          setStats(res.data.data);
        }
      } catch (err) {
        console.error("Failed to load dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const getStatusBadge = (status) => {
    return <span className={`badge badge-status-${status}`}>{status}</span>;
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome back, {user?.name}</h1>
          <p className="page-subtitle">
            {isAdmin &&
              "Global Holidays Executive Administration Dashboard (Full Access)"}
            {isManager &&
              "Manager Operations Dashboard — Assigned Package Portfolios"}
            {isSales &&
              "Sales & Marketing Pipeline — Assigned Leads & Destinations"}
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Link to="/leads" className="btn btn-primary">
            <MessageSquare size={16} />
            <span>Manage Leads</span>
          </Link>
        </div>
      </div>

      {/* RBAC Scoping Alert */}
      <div className="rbac-banner">
        <AlertCircle size={18} style={{ flexShrink: 0 }} />
        <div>
          {isAdmin && (
            <span>
              <strong>Admin Mode:</strong> You have unconstrained access to all
              packages, user assignments, leads, and system controls.
            </span>
          )}
          {isManager && (
            <span>
              <strong>Manager Role:</strong> You are viewing packages and client
              leads assigned to you by the Admin.
            </span>
          )}
          {isSales && (
            <span>
              <strong>Sales & Marketing Role:</strong> You have access to your
              assigned packages and designated leads.
            </span>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="card-grid">
        <div className="stat-card">
          <div>
            <div className="stat-value">
              {loading ? "..." : stats?.packages || 0}
            </div>
            <div className="stat-label">
              {isAdmin ? "Total Packages" : "Assigned Packages"}
            </div>
          </div>
          <div className="stat-icon">
            <Compass size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-value">
              {loading ? "..." : stats?.totalLeads || 0}
            </div>
            <div className="stat-label">Total Inquiries</div>
          </div>
          <div
            className="stat-icon"
            style={{ color: "#3B82F6", background: "rgba(59, 130, 246, 0.1)" }}
          >
            <MessageSquare size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-value">
              {loading ? "..." : stats?.convertedLeads || 0}
            </div>
            <div className="stat-label">Booked / Converted</div>
          </div>
          <div
            className="stat-icon"
            style={{ color: "#10B981", background: "rgba(16, 185, 129, 0.1)" }}
          >
            <CheckCircle size={24} />
          </div>
        </div>

        {isAdmin ? (
          <div className="stat-card">
            <div>
              <div className="stat-value">
                {loading ? "..." : stats?.users || 0}
              </div>
              <div className="stat-label">Staff Members</div>
            </div>
            <div
              className="stat-icon"
              style={{
                color: "#A855F7",
                background: "rgba(168, 85, 247, 0.1)",
              }}
            >
              <Users size={24} />
            </div>
          </div>
        ) : (
          <div className="stat-card">
            <div>
              <div className="stat-value">
                {loading ? "..." : `${stats?.conversionRate || 0}%`}
              </div>
              <div className="stat-label">Conversion Rate</div>
            </div>
            <div
              className="stat-icon"
              style={{
                color: "#F59E0B",
                background: "rgba(245, 158, 11, 0.1)",
              }}
            >
              <TrendingUp size={24} />
            </div>
          </div>
        )}
      </div>

      {/* Recent Leads */}
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.25rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.15rem", color: "#0b2230" }}>
              Recent Client Inquiries
            </h2>
            <p style={{ fontSize: "0.825rem", color: "#9CA3AF" }}>
              Latest customer enquiries filtered to your role
            </p>
          </div>
          <Link
            to="/leads"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "#F59E0B",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <span>View All Leads</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div
            style={{ padding: "2rem", textAlign: "center", color: "#9CA3AF" }}
          >
            Loading inquiries...
          </div>
        ) : stats?.recentLeads?.length === 0 ? (
          <div
            style={{ padding: "2rem", textAlign: "center", color: "#9CA3AF" }}
          >
            No recent inquiries found for your account.
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Phone / Email</th>
                  <th>Interested Package</th>
                  <th>Status</th>
                  <th>Assigned To</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {stats?.recentLeads?.map((lead) => (
                  <tr key={lead._id}>
                    <td>
                      <strong style={{ color: "#0b2230" }}>{lead.name}</strong>
                    </td>
                    <td>
                      <div>{lead.phone}</div>
                      <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                        {lead.email || "—"}
                      </div>
                    </td>
                    <td>
                      <span style={{ color: "#F59E0B", fontWeight: 600 }}>
                        {lead.packageInterest ||
                          lead.packageId?.title ||
                          "General Inquiry"}
                      </span>
                    </td>
                    <td>{getStatusBadge(lead.status)}</td>
                    <td>
                      <span style={{ fontSize: "0.825rem", color: "#2c495e" }}>
                        {lead.assignedTo?.name || "Unassigned"}
                      </span>
                    </td>
                    <td style={{ fontSize: "0.825rem", color: "#9CA3AF" }}>
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
