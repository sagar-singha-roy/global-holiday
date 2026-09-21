import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/client";
import Pagination from "../components/Pagination";
import {
  Plus,
  Search,
  Compass,
  Edit2,
  Trash2,
  Eye,
  Check,
  X,
  Lock,
  Upload,
  Image as ImageIcon,
} from "lucide-react";

const PackagesPage = () => {
  const { user, isAdmin } = useAuth();
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    duration: "",
    destination: "",
    price: "Tariff on Request",
    category: "domestic",
    rating: "5.0 ★★★★★",
    heroImg: "/images/hero-bg.jpg",
    overview: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("image", file);

    setUploading(true);
    try {
      const res = await api.post("/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        setFormData((prev) => ({
          ...prev,
          heroImg: res.data.url,
        }));
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const fetchPackages = useCallback(async () => {
    try {
      setLoading(true);
      const params = { limit, skip };
      if (search.trim()) {
        params.search = search.trim();
      }
      const res = await api.get("/packages", { params });
      if (res.data.success) {
        setPackages(res.data.data);
        setTotal(
          res.data.total !== undefined ? res.data.total : res.data.data.length,
        );
      }
    } catch (err) {
      console.error("Failed to load packages:", err);
    } finally {
      setLoading(false);
    }
  }, [limit, skip, search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPackages();
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchPackages]);

  const handleOpenCreate = () => {
    setSelectedPkg(null);
    setFormData({
      title: "",
      slug: "",
      duration: "",
      destination: "",
      price: "Tariff on Request",
      category: "domestic",
      rating: "5.0 ★★★★★",
      heroImg: "/images/hero-bg.jpg",
      overview: "",
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (pkg) => {
    setSelectedPkg(pkg);
    setFormData({
      title: pkg.title,
      slug: pkg.slug,
      duration: pkg.duration,
      destination: pkg.destination,
      price: pkg.price,
      category: pkg.category,
      rating: pkg.rating,
      heroImg: pkg.heroImg,
      overview: pkg.overview,
    });
    setIsModalOpen(true);
  };

  const handleOpenView = (pkg) => {
    setSelectedPkg(pkg);
    setIsViewModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedPkg) {
        await api.put(`/packages/${selectedPkg._id}`, formData);
      } else {
        await api.post("/packages", formData);
      }
      setIsModalOpen(false);
      fetchPackages();
    } catch (err) {
      alert(err.response?.data?.message || "Error saving package");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tour package?"))
      return;
    try {
      await api.delete(`/packages/${id}`);
      fetchPackages();
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting package");
    }
  };

  const displayPackages = packages;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">
            {isAdmin ? "Package Management" : "Your Assigned Packages"}
          </h1>
          <p className="page-subtitle">
            {isAdmin
              ? "Create, edit, and assign packages across all branches and staff"
              : "Viewing tour packages assigned to your account by the administrator"}
          </p>
        </div>
        {isAdmin && (
          <button onClick={handleOpenCreate} className="btn btn-primary">
            <Plus size={16} />
            <span>Create New Package</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <input
            type="text"
            className="input"
            placeholder="Search by package name or destination..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSkip(0);
            }}
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
      </div>

      {/* Table of Packages */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem", color: "#9CA3AF" }}>
          Loading packages...
        </div>
      ) : displayPackages.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "3rem" }}>
          <Compass
            size={36}
            color="#6B7280"
            style={{ margin: "0 auto 1rem" }}
          />
          <h3 style={{ color: "#0b2230" }}>No Packages Found</h3>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            {isAdmin
              ? "No packages match your search criteria."
              : "You do not have any packages assigned by the Admin yet."}
          </p>
        </div>
      ) : (
        <>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Package Title</th>
                  <th>Destination</th>
                  <th>Duration</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayPackages.map((pkg) => (
                  <tr key={pkg._id}>
                    <td>
                      <div style={{ fontWeight: 700, color: "#0b2230" }}>
                        {pkg.title}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#F59E0B" }}>
                        Slug: /{pkg.slug}
                      </div>
                    </td>
                    <td style={{ color: "#2c495e" }}>{pkg.destination}</td>
                    <td>
                      <span style={{ fontSize: "0.825rem", color: "#2c495e" }}>
                        {pkg.duration}
                      </span>
                    </td>
                    <td>
                      <span
                        style={{
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          backgroundColor: "rgba(245, 158, 11, 0.1)",
                          color: "#F59E0B",
                          textTransform: "capitalize",
                        }}
                      >
                        {pkg.category}
                      </span>
                    </td>
                    <td style={{ color: "#9CA3AF", fontSize: "0.825rem" }}>
                      {pkg.price || "Tariff on Request"}
                    </td>
                    <td>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          fontSize: "0.75rem",
                          color: pkg.isActive ? "#10B981" : "#6B7280",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: pkg.isActive
                              ? "#10B981"
                              : "#6B7280",
                          }}
                        />
                        {pkg.isActive ? "Active" : "Draft"}
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
                        <button
                          onClick={() => handleOpenView(pkg)}
                          className="btn btn-secondary"
                          style={{ padding: "0.4rem 0.6rem" }}
                          title="View Details"
                        >
                          <Eye size={14} />
                        </button>

                        {isAdmin ? (
                          <>
                            <button
                              onClick={() => handleOpenEdit(pkg)}
                              className="btn btn-secondary"
                              style={{ padding: "0.4rem 0.6rem" }}
                              title="Edit Package"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => handleDelete(pkg._id)}
                              className="btn btn-danger"
                              style={{ padding: "0.4rem 0.6rem" }}
                              title="Delete Package"
                            >
                              <Trash2 size={14} />
                            </button>
                          </>
                        ) : (
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "#6B7280",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.25rem",
                            }}
                            title="View only mode"
                          >
                            <Lock size={12} /> View Only
                          </span>
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

      {/* Edit / Create Modal (Admin Only) */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 style={{ color: "#0b2230" }}>
                {selectedPkg ? "Edit Package" : "Create Tour Package"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
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

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Package Title</label>
                  <input
                    type="text"
                    className="input"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
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
                    <label className="form-label">URL Slug</label>
                    <input
                      type="text"
                      className="input"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g. 5 Nights / 6 Days"
                      value={formData.duration}
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Destination</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g. Kashmir (Srinagar • Gulmarg)"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
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
                    <label className="form-label">Category</label>
                    <select
                      className="select"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    >
                      <option value="domestic">Domestic</option>
                      <option value="international">International</option>
                      <option value="spiritual">Spiritual</option>
                      <option value="honeymoon">Honeymoon</option>
                      <option value="adventure">Adventure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Price</label>
                    <input
                      type="text"
                      className="input"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Hero Image (Upload or URL)
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      className="input"
                      placeholder="/images/hero-bg.jpg or /uploads/..."
                      value={formData.heroImg}
                      onChange={(e) =>
                        setFormData({ ...formData, heroImg: e.target.value })
                      }
                      style={{ flex: 1 }}
                    />
                    <label
                      className="btn btn-secondary"
                      style={{
                        cursor: uploading ? "not-allowed" : "pointer",
                        padding: "0.625rem 1rem",
                        whiteSpace: "nowrap",
                        margin: 0,
                      }}
                    >
                      <Upload size={15} />
                      <span>{uploading ? "Uploading..." : "Upload Image"}</span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/jpg"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                  {formData.heroImg && (
                    <div
                      style={{
                        marginTop: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <img
                        src={
                          formData.heroImg.startsWith("/uploads")
                            ? `http://localhost:5001${formData.heroImg}`
                            : formData.heroImg
                        }
                        alt="Preview"
                        style={{
                          width: "48px",
                          height: "32px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                        Image path: {formData.heroImg}
                      </span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Overview</label>

                  <textarea
                    rows={3}
                    className="textarea"
                    value={formData.overview}
                    onChange={(e) =>
                      setFormData({ ...formData, overview: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {selectedPkg ? "Save Changes" : "Create Package"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {isViewModalOpen && selectedPkg && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 style={{ color: "#0b2230" }}>{selectedPkg.title}</h3>
              <button
                onClick={() => setIsViewModalOpen(false)}
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
            <div className="modal-body">
              <div
                style={{
                  marginBottom: "1rem",
                  color: "#F59E0B",
                  fontWeight: 600,
                }}
              >
                {selectedPkg.duration} • {selectedPkg.destination}
              </div>
              <p
                style={{
                  color: "#2c495e",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {selectedPkg.overview}
              </p>

              {selectedPkg.inclusions && selectedPkg.inclusions.length > 0 && (
                <div style={{ marginBottom: "1.25rem" }}>
                  <h4
                    style={{
                      color: "#0b2230",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Package Inclusions:
                  </h4>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      color: "#9CA3AF",
                      fontSize: "0.85rem",
                    }}
                  >
                    {selectedPkg.inclusions.map((inc, i) => (
                      <li key={i} style={{ marginBottom: "0.25rem" }}>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setIsViewModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackagesPage;
