# Global Holiday — Project Roadmap & Next Steps

Last updated: September 2026  
Status: Active Development  

---

## 1. System Overview & Current State

- **User Portal (`/user`)**: Next.js 16 (Turbopack) frontend on `http://localhost:3000`.
  - Inquiries from `#trip-planner-form` and `#direct-enquiry-form` validate required fields (`destination`, `name`, `phone` with min 7 digits).
  - Client submits lead data via `user/src/lib/leadsApi.js` to CRM backend.
  - Displays celebratory confetti dialog (`SuccessModal.jsx` using `canvas-confetti`) + toast notifications.
- **Admin CRM Portal (`/admin`)**: Vite + React on `http://localhost:5173`.
  - Role-based permissions: `admin` (full access), `manager`, `sales` with granular module permissions (`dashboard`, `packages`, `leads`, `bookings`, `users`, `settings`).
  - Icon-only edit modal for user component access.
  - Leads management page (`LeadsPage.jsx`) displaying incoming inquiries from user portal.
- **Backend API (`/backend`)**: Node.js / Express on `http://localhost:5001/v1/api` + MongoDB.
  - `POST /v1/api/leads`: Public endpoint for user inquiries.
  - `GET /v1/api/leads`: Protected CRM endpoint (accessible by admin, manager, or users with `leads` permission).

---

## 2. Planned Features & Next Steps

### Phase 1: Direct Communication & Notifications (High Priority)
1. **One-Click WhatsApp & Call Actions in CRM Leads Table**:
   - Location: `admin/src/pages/LeadsPage.jsx`
   - Add direct "Chat on WhatsApp" action button with pre-filled message:
     ```
     https://wa.me/<phone>?text=Hello <Name>, regarding your <Destination> trip request with Global Holidays...
     ```
   - Add `tel:<phone>` direct click-to-call link for quick dialing.
2. **Instant Customer Auto-Responder**:
   - Location: `backend/src/controllers/leadController.js`
   - Trigger instant confirmation email or WhatsApp webhook (Twilio / Gallabox / Wati) when customer submits lead.
3. **Internal Sales Notification**:
   - Send email or WhatsApp alert to staff when high-priority or custom holiday lead arrives.

---

### Phase 2: CRM Lead Management & Follow-ups
1. **Kanban Pipeline View for Leads**:
   - Toggle between Table View and Kanban Board View.
   - Columns: `New` → `Contacted` → `Quoted` → `Converted` → `Lost`.
   - Drag-and-drop or quick select to update stage with history tracking.
2. **Scheduled Follow-up Reminders**:
   - Date & time picker to set callback reminder.
   - Reminder badge counter in `Topbar.jsx` notification bell.
3. **Lead Activity Log & Notes**:
   - Enhanced notes thread for staff discussion on each lead.

---

### Phase 3: Quotation & Itinerary PDF Generator
1. **Quick Quotation Builder**:
   - From Lead details drawer, click "Create Quote".
   - Select predefined package or build custom day-wise itinerary with line items (Hotel, Cab, Sightseeing, Permits).
2. **Branded PDF Export**:
   - Export luxury branded PDF (Global Holidays header, gold accent palette, inclusions/exclusions, payment terms).
   - "Send to Client" button sending PDF link directly to WhatsApp/Email.

---

### Phase 4: Online Booking & Payment Gateway
1. **Payment Gateway Integration**:
   - Integrate Razorpay / Cashfree on User Portal and CRM.
   - Allow customers to pay token booking amount (e.g. ₹5,000 or 25% advance).
2. **Bookings & Payments Module (`BookingsPage.jsx`)**:
   - Track booking confirmation status, transaction ID, payment receipts, and balance due dates.

---

## 3. Key Architecture & File References

| Component | Key File Location | Purpose |
| :--- | :--- | :--- |
| User Inquiries API Client | `user/src/lib/leadsApi.js` | Sends lead payloads to backend `/v1/api/leads` |
| User Confetti Modal | `user/src/components/SuccessModal.jsx` | Celebratory pop-up with canvas-confetti |
| User Form Handlers | `user/src/main.js` | Validates `#trip-planner-form` and `#direct-enquiry-form` |
| Admin Leads View | `admin/src/pages/LeadsPage.jsx` | CRM leads table, filter by status, priority, search |
| Admin Staff Permissions | `admin/src/pages/UsersPage.jsx` | Staff role assignment & module access checkboxes |
| Backend Lead Controller | `backend/src/controllers/leadController.js` | Lead creation, list query, status updates |
| Backend Lead Model | `backend/src/models/Lead.js` | Mongoose schema (name, phone, destination, budget, etc.) |
| Backend User Model | `backend/src/models/User.js` | User schema (role, permissions array, phone, email) |

---

## 4. Run Commands

- **User Portal**: `cd user && npm run dev` (Port 3000)
- **Admin CRM**: `cd admin && npm run dev` (Port 5173)
- **Backend API**: `cd backend && npm run dev` (Port 5001)
