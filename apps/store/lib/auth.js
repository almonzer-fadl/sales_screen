import { lucia } from 'lucia';
import { nextjs } from 'lucia/middleware';
import { mongoose } from '@lucia-auth/adapter-mongodb';
import { connectDB } from './db';

// Initialize Lucia auth
const auth = lucia({
  env: process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV',
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  adapter: mongoose({
    User: connectDB.model('User'),
    Session: connectDB.model('Session'),
  }),
  getUserAttributes: (data) => {
    return {
      email: data.email,
      role: data.role,
    };
  },
});

// Authenticate user
auth.authenticateUser = async (role, email, password) => {
  try {
    const user = await auth.getUserByEmail(email);
    
    if (!user || user.role !== role) {
      return null;
    }

    const validPassword = await auth.validatePassword(user.userId, password);
    if (!validPassword) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
};

// Create session cookie
auth.createSessionCookie = async (user) => {
  const session = await auth.createSession({
    userId: user.userId,
    attributes: {},
  });

  return auth.createSessionCookie(session.id);
};

export { auth }; 