import { lucia } from 'lucia'
import { nextjs_future } from 'lucia/middleware'
import { mongoose } from 'lucia/adapters'
import { connectDB } from '../db'

// Initialize MongoDB connection
connectDB()

export const auth = lucia({
  env: process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV',
  middleware: nextjs_future(),
  sessionCookie: {
    expires: false,
  },
  adapter: mongoose({
    // MongoDB connection is handled by connectDB()
  }),
  getUserAttributes: (data) => {
    return {
      email: data.email,
      role: data.role,
      profile: data.profile,
      supplierInfo: data.supplierInfo,
      storeInfo: data.storeInfo
    }
  }
}) 