const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const User = require('../models/User');
const Package = require('../models/Package');
const Lead = require('../models/Lead');

dotenv.config();

const orderedSlugs = [
  'jammu-kashmir-grand-tour',
  'manali-shimla-kasol',
  'vrindavan-braj-dham',
  'meghalaya-escape',
  'sikkim-grandeur',
  'kashmir-odyssey',
  'andaman-azure',
  'rajasthan-splendour',
  'tripura-heritage',
  'himachal-splendour',
  'goa-escape',
  'thailand-gateway',
  'aizawl-escape',
  'darjeeling-escape',
  'grand-bharat-circuit',
  'delhi-heritage',
];

const getCategory = (slug) => {
  if (slug === 'thailand-gateway') return 'international';
  if (slug === 'vrindavan-braj-dham') return 'spiritual';
  if (slug.includes('honeymoon') || slug === 'goa-escape') return 'honeymoon';
  return 'domestic';
};

const seedDatabase = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || 'mongodb://localhost:27017/global-holidays';
    await mongoose.connect(mongoURI);
    console.log('[SEED] Connected to MongoDB:', mongoURI);

    // Dynamically load PACKAGE_DATA from user portal data source
    const packagesDataPath = path.resolve(
      __dirname,
      '../../../user/src/data/packages.js'
    );
    const importedModule = await import(
      'file://' + packagesDataPath + '?t=' + Date.now()
    );
    const PACKAGE_DATA = importedModule.PACKAGE_DATA;

    // Clear old packages
    await Package.deleteMany({});
    console.log('[SEED] Existing packages cleared');

    const packagesToInsert = [];

    orderedSlugs.forEach((slug, index) => {
      const data = PACKAGE_DATA[slug];
      if (!data) return;

      packagesToInsert.push({
        slug,
        title: data.title,
        duration: data.duration,
        destination: data.destination,
        price: data.price || 'Tariff on Request',
        rating: data.rating || '5.0 ★★★★★',
        heroImg: data.heroImg || '/images/hero-bg.jpg',
        category: getCategory(slug),
        featuredOrder: index + 1,
        overview: data.overview || '',
        itinerary: (data.itinerary || []).map((it) => ({
          day: it.day,
          title: it.title,
          desc: it.desc,
        })),
        inclusions: data.inclusions || [],
        exclusions: data.exclusions || [],
        isActive: true,
      });
    });

    const createdPackages = await Package.insertMany(packagesToInsert);
    console.log(`[SEED] ${createdPackages.length} packages created in MongoDB`);

    // Ensure Admin user
    let admin = await User.findOne({ email: 'admin@globalholidays.com' });
    if (!admin) {
      admin = await User.create({
        name: 'Administrator',
        email: 'admin@globalholidays.com',
        password: 'Admin@123',
        role: 'admin',
        isActive: true,
      });
      console.log('[SEED] Admin created: admin@globalholidays.com');
    }

    // Manager User
    let manager = await User.findOne({ email: 'manager@globalholidays.com' });
    const managerPkgs = createdPackages.slice(0, 5).map((p) => p._id);
    if (!manager) {
      manager = await User.create({
        name: 'Regional Operations Manager',
        email: 'manager@globalholidays.com',
        password: 'Manager@123',
        role: 'manager',
        isActive: true,
        assignedPackages: managerPkgs,
        assignedDestinations: ['Kashmir', 'Himachal', 'Vrindavan', 'Meghalaya', 'Sikkim'],
      });
      console.log('[SEED] Manager created: manager@globalholidays.com');
    } else {
      manager.assignedPackages = managerPkgs;
      await manager.save();
    }

    // Sales User
    let sales = await User.findOne({ email: 'sales@globalholidays.com' });
    const salesPkgs = [createdPackages[0]._id, createdPackages[1]._id, createdPackages[2]._id];
    if (!sales) {
      sales = await User.create({
        name: 'Sales & Marketing Executive',
        email: 'sales@globalholidays.com',
        password: 'Sales@123',
        role: 'sales',
        isActive: true,
        assignedPackages: salesPkgs,
        assignedDestinations: ['Kashmir', 'Himachal', 'Vrindavan'],
      });
      console.log('[SEED] Sales executive created: sales@globalholidays.com');
    } else {
      sales.assignedPackages = salesPkgs;
      await sales.save();
    }

    // Clean and seed real inquiry records
    await Lead.deleteMany({});
    await Lead.create([
      {
        name: 'Anirban Mukherjee',
        email: 'anirban.m@gmail.com',
        phone: '+91 98301 23456',
        packageInterest: 'Jammu & Kashmir Grand Tour',
        packageId: createdPackages[0]._id,
        destination: 'Jammu & Kashmir',
        travelDates: 'May 10 - May 18, 2026',
        travellers: 4,
        budget: '₹1,50,000',
        message: 'Family of 4, require premium houseboat in Srinagar and Gulmarg Gondola booking.',
        status: 'new',
        priority: 'high',
        assignedTo: manager._id,
        source: 'website',
        notes: [{ text: 'Inquiry received via online portal', addedByName: 'System' }],
      },
      {
        name: 'Sneha Sengupta',
        email: 'sneha.travels@yahoo.com',
        phone: '+91 98312 98765',
        packageInterest: 'Manali • Shimla • Kasol — Himalayan Escape',
        packageId: createdPackages[1]._id,
        destination: 'Himachal Pradesh',
        travelDates: 'June 2026',
        travellers: 2,
        budget: '₹85,000',
        message: 'Couple trip, require scenic mountain view resort in Kasol and private sedan.',
        status: 'contacted',
        priority: 'medium',
        assignedTo: manager._id,
        source: 'whatsapp',
        notes: [{ text: 'Brochure sent via WhatsApp', addedByName: 'Regional Operations Manager' }],
      },
      {
        name: 'Debashis Roy',
        email: 'debashis.roy@outlook.com',
        phone: '+91 94330 11223',
        packageInterest: 'Vrindavan • Mathura • Barsana • Govardhan',
        packageId: createdPackages[2]._id,
        destination: 'Uttar Pradesh',
        travelDates: 'October 2026',
        travellers: 6,
        budget: '₹1,20,000',
        message: 'Pilgrimage group of 6 senior citizens. Need comfortable AC Tempo Traveller and ground floor rooms.',
        status: 'quoted',
        priority: 'high',
        assignedTo: sales._id,
        source: 'phone',
        notes: [{ text: 'Detailed pilgrim quotation shared via email', addedByName: 'Sales & Marketing Executive' }],
      },
    ]);

    console.log('\n[SEED SUCCESS] All 16 tour packages imported into MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('[SEED ERROR]', err);
    process.exit(1);
  }
};

seedDatabase();
