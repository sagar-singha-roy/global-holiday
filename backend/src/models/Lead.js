const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  addedByName: { type: String, default: "Staff" },
  addedAt: { type: Date, default: Date.now },
});

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add customer name"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },
    phone: {
      type: String,
      required: [true, "Please add contact phone number"],
      trim: true,
    },
    packageInterest: {
      type: String,
      default: "",
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
    },
    destination: {
      type: String,
      default: "",
    },
    travelDates: {
      type: String,
      default: "",
    },
    travellers: {
      type: Number,
      default: 1,
    },
    budget: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "quoted", "converted", "lost"],
      default: "new",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    notes: [noteSchema],
    source: {
      type: String,
      enum: ["website", "whatsapp", "phone", "walk-in", "admin"],
      default: "website",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Lead", leadSchema);
