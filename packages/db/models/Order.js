import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    total: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  subtotal: {
    type: Number,
    required: true,
    min: 0
  },
  shipping: {
    method: String,
    cost: {
      type: Number,
      default: 0
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String
    },
    tracking: {
      number: String,
      carrier: String,
      status: String,
      updatedAt: Date
    }
  },
  tax: {
    rate: Number,
    amount: {
      type: Number,
      default: 0
    }
  },
  total: {
    type: Number,
    required: true,
    min: 0
  },
  payment: {
    method: String,
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionId: String,
    paidAt: Date
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  notes: {
    customer: String,
    admin: String
  },
  metadata: {
    ip: String,
    userAgent: String,
    referrer: String
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
orderSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

// Generate order number
orderSchema.pre('validate', function(next) {
  if (this.isNew) {
    const date = new Date()
    const year = date.getFullYear().toString().slice(-2)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    this.orderNumber = `ORD-${year}${month}${day}-${random}`
  }
  next()
})

// Calculate totals before saving
orderSchema.pre('save', function(next) {
  if (this.isModified('items')) {
    this.subtotal = this.items.reduce((sum, item) => sum + item.total, 0)
    this.total = this.subtotal + this.shipping.cost + this.tax.amount
  }
  next()
})

export default mongoose.models.Order || mongoose.model('Order', orderSchema) 