const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./lib/db');
const errorHandler = require('./middleware/errorHandler');
const User = require('./models/User');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5001',
  process.env.CLIENT_URL,
  process.env.PUBLIC_WEB_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Permissive in dev
      }
    },
    credentials: true,
  })
);

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Health check endpoint
app.get('/v1/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Global Holidays CRM Backend v1',
  });
});

// Also support root /api/health for convenience
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Global Holidays CRM Backend v1',
  });
});

// Mount Routes under /v1/api
app.use('/v1/api/auth', require('./routes/authRoutes'));
app.use('/v1/api/packages', require('./routes/packageRoutes'));
app.use('/v1/api/users', require('./routes/userRoutes'));
app.use('/v1/api/leads', require('./routes/leadRoutes'));
app.use('/v1/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/v1/api/upload', require('./routes/uploadRoutes'));

// Backward compatibility alias for /api routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/packages', require('./routes/packageRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));



// Error handling middleware
app.use(errorHandler);

// Bootstrap initial Admin if none exists
const bootstrapAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const email = (process.env.ADMIN_EMAIL || 'admin@globalholidays.com').toLowerCase();
      const password = process.env.ADMIN_PASSWORD || 'Admin@123';
      const name = process.env.ADMIN_NAME || 'Super Admin';

      await User.create({
        name,
        email,
        password,
        role: 'admin',
        isActive: true,
      });
      console.log(`[BOOTSTRAP] Initial Admin account created: ${email}`);
    }
  } catch (err) {
    console.error(`[BOOTSTRAP ERROR] Failed to seed default admin: ${err.message}`);
  }
};

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, async () => {
  console.log(`Global Holidays Backend running on http://localhost:${PORT}`);
  await bootstrapAdmin();
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
});

module.exports = app;
