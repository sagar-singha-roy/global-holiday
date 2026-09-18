import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Lock, Mail, AlertCircle } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid credentials. Please verify your email and password.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top right, rgba(42, 162, 200, 0.12), transparent 50%), radial-gradient(circle at bottom left, rgba(191, 134, 36, 0.08), transparent 50%), #f0f6fb",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#ffffff",
          border: "1px solid rgba(31, 122, 168, 0.2)",
          borderRadius: "16px",
          padding: "2.5rem",
          boxShadow: "0 20px 48px rgba(11, 34, 48, 0.08)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, #2aa2c8 0%, #1f7aa8 50%, #11577a 100%)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginBottom: "1rem",
              boxShadow: "0 8px 20px rgba(31, 122, 168, 0.3)",
            }}
          >
            GH
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0b2230" }}>
            Global Holidays CRM
          </h1>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#5f7c91",
              marginTop: "0.35rem",
            }}
          >
            Sign in to access your administrative operations dashboard
          </p>
        </div>

        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              background: "rgba(220, 38, 38, 0.08)",
              border: "1px solid rgba(220, 38, 38, 0.25)",
              borderRadius: "8px",
              color: "#dc2626",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" style={{ color: "#2c495e" }}>
              Work Email
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                className="input"
                placeholder="name@globalholidays.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ paddingLeft: "2.5rem" }}
              />
              <Mail
                size={16}
                style={{
                  position: "absolute",
                  left: "0.85rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#5f7c91",
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ color: "#2c495e" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                className="input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingLeft: "2.5rem" }}
              />
              <Lock
                size={16}
                style={{
                  position: "absolute",
                  left: "0.85rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#5f7c91",
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{
              width: "100%",
              justifyContent: "center",
              padding: "0.75rem",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            {loading ? "Authenticating Securely..." : "Sign In to Portal"}
          </button>
        </form>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(31, 122, 168, 0.12)",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#5f7c91",
          }}
        >
          Protected by Role-Based Access Control • Global Holidays Tour &
          Travels
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
