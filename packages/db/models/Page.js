import mongoose from 'mongoose'

const pageSchema = new mongoose.Schema({
  title: {
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
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    trim: true
  },
  visibility: {
    type: String,
    enum: ['public', 'private', 'draft'],
    default: 'draft'
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  metadata: {
    seoTitle: String,
    seoDescription: String,
    seoKeywords: String,
    ogImage: String
  },
  settings: {
    showInMenu: {
      type: Boolean,
      default: false
    },
    menuOrder: {
      type: Number,
      default: 0
    },
    template: {
      type: String,
      default: 'default'
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
pageSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

// Generate slug from title
pageSchema.pre('validate', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
  next()
})

export default mongoose.models.Page || mongoose.model('Page', pageSchema) 