import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['main-admin', 'admin', 'supplier', 'customer'],
    required: true 
  },
  profile: {
    name: { type: String, required: true },
    phone: String,
    address: String,
    city: String,
    country: String,
    createdAt: { type: Date, default: Date.now }
  },
  // Supplier specific fields
  supplierInfo: {
    businessName: String,
    businessType: String,
    taxId: String,
    approved: { type: Boolean, default: false },
    approvedAt: Date,
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  // Store specific fields
  storeInfo: {
    name: String,
    description: String,
    logo: String,
    banner: String,
    socialLinks: {
      website: String,
      facebook: String,
      instagram: String,
      twitter: String
    }
  },
  // Common fields
  isActive: { type: Boolean, default: true },
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

// Update the updatedAt timestamp before saving
userSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.User || mongoose.model('User', userSchema) 