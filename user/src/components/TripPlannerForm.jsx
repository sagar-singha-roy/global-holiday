"use client";

import { useState } from "react";
import { showToast } from "@/components/Toast";
import { showSuccessModal } from "@/components/SuccessModal";
import { submitLead } from "@/lib/leadsApi";

export default function TripPlannerForm() {
  const [vibe, setVibe] = useState("Honeymoon");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2 Persons");
  const [budget, setBudget] = useState("Luxury Boutique");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const vibes = [
    "Honeymoon",
    "Family Holiday",
    "Wildlife & Nature",
    "Cultural Heritage",
    "Adventure & Trek",
  ];

  const buildWhatsAppUrl = () => {
    const message =
      `*Custom Luxury Trip Request — Global Holidays Agartala* \n\n` +
      `*Name:* ${name || "Guest"}\n` +
      `*Phone:* ${phone || "N/A"}\n` +
      `*Travel Style:* ${vibe}\n` +
      `*Destination:* ${dest || "Not selected yet"}\n` +
      `*Date of Travel:* ${date || "Flexible"}\n` +
      `*Travellers:* ${travelers}\n` +
      `*Comfort Tier:* ${budget}\n\n` +
      `Please provide a bespoke itinerary & quote. Thank you!`;

    return `https://wa.me/918731010676?text=${encodeURIComponent(message)}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!dest) newErrors.dest = "Please choose your dream destination";
    if (!name || name.trim().length < 2) newErrors.name = "Please enter your full name";
    if (!phone) newErrors.phone = "Phone or WhatsApp number is required";
    else if (phone.replace(/\D/g, "").length < 7) newErrors.phone = "At least 7 digits required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Required Fields Missing", "Please complete all highlighted required fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      await submitLead({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        destination: dest,
        packageInterest: `${vibe} Tour - ${dest || "Custom Circuit"}`,
        travelDates: date,
        budget,
        message: `Travel Style: ${vibe} | Travellers: ${travelers} | Comfort Tier: ${budget}`,
        source: "website",
      });

      showSuccessModal(
        `Inquiry Registered, ${name}! 🎉`,
        `Your personalized luxury trip request for ${dest} has been registered into our CRM. Our senior Agartala travel concierge is reviewing your request.`,
        { destination: dest, phone }
      );

      showToast(
        "Concierge Request Received",
        "Your inquiry has been submitted to our CRM. Our senior travel designer will reach out shortly.",
      );

      setName("");
      setPhone("");
      setEmail("");
      setDest("");
    } catch (err) {
      console.error("Failed to submit lead:", err);
      showToast("Submission Error", "Could not submit inquiry. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="planner-form"
      id="trip-planner-form"
      onSubmit={handleSubmit}
    >
      {/* Travel Style Selector */}
      <div className="planner-group">
        <label className="planner-label">1. Choose Your Travel Vibe</label>
        <div className="vibe-selector-group" id="vibe-selector-group">
          {vibes.map((v) => (
            <button
              key={v}
              type="button"
              className={`vibe-btn ${vibe === v ? "active" : ""}`}
              onClick={() => setVibe(v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Inputs */}
      <div className="planner-grid-2">
        <div className="planner-field">
          <label htmlFor="plan-destination" className="planner-label">
            2. Target Destination
          </label>
          <select
            id="plan-destination"
            className="planner-select"
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            required
          >
            <option value="">Select Dream Circuit</option>
            <optgroup label="Northeast India">
              <option value="Meghalaya (Shillong • Cherrapunji • Dawki)">
                Meghalaya (Shillong • Cherrapunji • Dawki)
              </option>
              <option value="Sikkim & Darjeeling (Gangtok • Gurudongmar)">
                Sikkim &amp; Darjeeling (Gangtok • Gurudongmar)
              </option>
              <option value="Tripura Heritage & Unakoti Circuit">
                Tripura Heritage &amp; Unakoti Circuit
              </option>
              <option value="Arunachal Pradesh (Tawang Monastic Circuit)">
                Arunachal Pradesh (Tawang Monastic Circuit)
              </option>
              <option value="Assam Wildlife & Tea Luxury (Kaziranga)">
                Assam Wildlife &amp; Tea Luxury (Kaziranga)
              </option>
            </optgroup>
            <optgroup label="India Flagships">
              <option value="Kashmir (Srinagar • Gulmarg • Pahalgam)">
                Kashmir (Srinagar • Gulmarg • Pahalgam)
              </option>
              <option value="Andaman Islands (Havelock • Neil • Port Blair)">
                Andaman Islands (Havelock • Neil • Port Blair)
              </option>
              <option value="Rajasthan Royal Palaces & Desert Havelis">
                Rajasthan Royal Palaces &amp; Desert Havelis
              </option>
              <option value="Himachal & Spiti High Valley Expedition">
                Himachal &amp; Spiti High Valley Expedition
              </option>
              <option value="Goa Luxury Private Beachfront Retreat">
                Goa Luxury Private Beachfront Retreat
              </option>
            </optgroup>
            <optgroup label="International Haunts">
              <option value="Bali & Southeast Asia Islands">
                Bali &amp; Southeast Asia Islands
              </option>
              <option value="Thailand Island & Luxury Bay Escapes">
                Thailand Island &amp; Luxury Bay Escapes
              </option>
              <option value="Dubai & Emirates Ultramodern Luxury">
                Dubai &amp; Emirates Ultramodern Luxury
              </option>
              <option value="Switzerland Alps & Scenic Rail Odyssey">
                Switzerland Alps &amp; Scenic Rail Odyssey
              </option>
            </optgroup>
          </select>
        </div>

        <div className="planner-field">
          <label htmlFor="plan-date" className="planner-label">
            3. Approximate Travel Date
          </label>
          <input
            type="date"
            id="plan-date"
            className="planner-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="planner-field">
          <label htmlFor="plan-travelers" className="planner-label">
            4. Number of Guests
          </label>
          <select
            id="plan-travelers"
            className="planner-select"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          >
            <option value="Solo Explorer">Solo Explorer</option>
            <option value="Couple (2 Persons)">Couple (2 Persons)</option>
            <option value="Family / Small Group (3-5)">
              Family / Small Group (3-5)
            </option>
            <option value="Large Group (6+ Persons)">
              Large Group (6+ Persons)
            </option>
          </select>
        </div>

        <div className="planner-field">
          <label htmlFor="plan-budget" className="planner-label">
            5. Preferred Stay Standard
          </label>
          <select
            id="plan-budget"
            className="planner-select"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="Luxury Boutique & Heritage Havelis">
              Luxury Boutique &amp; Heritage Havelis (Recommended)
            </option>
            <option value="5-Star Ultra Luxury & Private Chalets">
              5-Star Ultra Luxury &amp; Private Chalets
            </option>
            <option value="Curated Comfort & Premium Scenic Homestays">
              Curated Comfort &amp; Premium Scenic Homestays
            </option>
          </select>
        </div>
      </div>

      {/* Guest Contact Details */}
      <div className="planner-contact-section">
        <h4 className="planner-subheading">Your Contact Coordinates</h4>
        <div className="planner-grid-3">
          <div className="planner-field">
            <input
              type="text"
              id="plan-name"
              className="planner-input"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="planner-field">
            <input
              type="tel"
              id="plan-phone"
              className="planner-input"
              placeholder="WhatsApp Number (e.g. +91 98765 43210)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="planner-field">
            <input
              type="email"
              id="plan-email"
              className="planner-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Realtime Selection Summary */}
      <div className="planner-summary-box">
        <div className="summary-tags">
          <span className="summary-pill">
            Vibe: <strong id="summary-vibe">{vibe}</strong>
          </span>
          <span className="summary-pill">
            Circuit: <strong id="summary-dest">{dest || "Select above"}</strong>
          </span>
          <span className="summary-pill">
            Group: <strong>{travelers}</strong>
          </span>
        </div>
        <div className="planner-action-buttons">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleWhatsApp}
          >
            <span>Direct WhatsApp Quote</span>
          </button>
          <button
            type="submit"
            className="btn btn-gold"
            disabled={submitting}
          >
            <span>{submitting ? "Sending to CRM..." : "Send Concierge Request"}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
