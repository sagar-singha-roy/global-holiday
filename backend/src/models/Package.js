const mongoose = require('mongoose');

const itineraryItemSchema = new mongoose.Schema({
  day: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const packageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, 'Please add a slug'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, 'Please add a package title'],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, 'Please add duration'],
    },
    destination: {
      type: String,
      required: [true, 'Please add destination'],
    },
    category: {
      type: String,
      enum: ['domestic', 'international', 'spiritual', 'honeymoon', 'adventure'],
      default: 'domestic',
    },
    price: {
      type: String,
      default: 'Tariff on Request',
    },
    rating: {
      type: String,
      default: '5.0 ★★★★★',
    },
    heroImg: {
      type: String,
      default: '/images/hero-bg.jpg',
    },
    overview: {
      type: String,
      default: '',
    },
    itinerary: [itineraryItemSchema],
    inclusions: [{ type: String }],
    exclusions: [{ type: String }],
    isActive: {
      type: Boolean,
      default: true,
    },
    featuredOrder: {
      type: Number,
      default: 100,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Package', packageSchema);
