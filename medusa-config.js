// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "https://admin-medusa-test-new.netlify.app";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "https://medusa-test-front-6bjx5.ondigitalocean.app" || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-store";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://:3ca723ead08d228f0b52c1004e51d6ca@sole.redistogo.com:10717/";


// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
];

module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
    database_extra:
      process.env.NODE_ENV !== "development"
        ? { ssl: { rejectUnauthorized: false } }
        : {},
  },
  plugins,
};
