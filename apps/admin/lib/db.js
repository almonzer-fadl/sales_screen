import mongoose from 'mongoose'
import { User } from '../models/User'
import { Session } from '../models/Session'

let isConnected = false

export async function connectDB() {
  if (isConnected) {
    return mongoose
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
    return mongoose
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// Export models
export { User, Session }
