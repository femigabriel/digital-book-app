import jwt from "jsonwebtoken";

// Secret key for JWT (must be the same key used in verification)
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

function generateToken(teacherId: string) {
  const token = jwt.sign({ teacherId }, JWT_SECRET, { expiresIn: '1h' }); // Set expiration as needed
  return token;
}
