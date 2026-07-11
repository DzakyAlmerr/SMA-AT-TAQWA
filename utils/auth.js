// 🛡️ AUTHENTICATION: JWT Token Management & User Authentication
// 🔐 Handles user login, token generation, and authentication middleware

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '24h';

// Hash password using bcrypt
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

// Verify password against stored hash
const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate JWT token for authenticated users
const generateToken = (userId, username, role, relatedId = null) => {
  return jwt.sign(
    {
      userId,
      username,
      role,
      relatedId,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );
};

// Middleware to verify JWT token in requests (named authenticateToken for compatibility)
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access token required',
      code: 'AUTH_TOKEN_REQUIRED'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: 'Invalid token',
        code: 'AUTH_INVALID_TOKEN'
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  authenticateToken,
  verifyToken: authenticateToken, // Alias for compatibility
};