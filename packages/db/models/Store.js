import mongoose from 'mongoose'

const storeSchema = new mongoose.Schema({
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  storeName: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  bio: {
    type: String,
    trim: true
  },
  businessInfo: {
    type: {
      type: String,
      enum: ['individual', 'company', 'partnership'],
      required: true
    },
    taxId: String,
    registrationNumber: String,
    vatNumber: String
  },
  contact: {
    email: String,
    phone: String,
    website: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
  },
  social: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String
  },
  media: {
    logo: {
      url: String,
      alt: String
    },
    banner: {
      url: String,
      alt: String
    },
    gallery: [{
      url: String,
      alt: String
    }]
  },
  settings: {
    currency: {
      type: String,
      default: 'USD'
    },
    language: {
      type: String,
      default: 'en'
    },
    timezone: {
      type: String,
      default: 'UTC'
    }
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'suspended', 'closed'],
    default: 'active'
  },
  stats: {
    totalProducts: {
      type: Number,
      default: 0
    },
    totalOrders: {
      type: Number,
      default: 0
    },
    totalRevenue: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviewCount: {
      type: Number,
      default: 0
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Update timestamps before saving
storeSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

// Generate slug from storeName
storeSchema.pre('validate', function(next) {
  if (this.isModified('storeName')) {
    this.slug = this.storeName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
  next()
})

export default mongoose.models.Store || mongoose.model('Store', storeSchema) 