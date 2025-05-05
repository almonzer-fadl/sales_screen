# Deployment Guide for Daqaiq eCommerce Platform

## Prerequisites

- Node.js 18.x or later
- MongoDB Atlas account
- Vercel account (recommended for deployment)
- SMTP service for emails
- Storage service (e.g., AWS S3) for product images

## Environment Variables

Create a `.env.production` file in the root directory with the following variables:

```env
# Domain Configuration
NEXT_PUBLIC_DOMAIN=your-domain.com
NEXT_PUBLIC_APP_URL=https://your-domain.com

# MongoDB Configuration
MONGODB_URI=your_mongodb_uri
MONGODB_DB=your_database_name

# Authentication (Lucia)
AUTH_SECRET=your_auth_secret_key
AUTH_COOKIE_NAME=session

# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SMTP_FROM=noreply@your-domain.com

# Storage Configuration
STORAGE_BUCKET=your_storage_bucket
STORAGE_REGION=your_storage_region
STORAGE_ACCESS_KEY=your_storage_access_key
STORAGE_SECRET_KEY=your_storage_secret_key

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Security
CORS_ORIGIN=https://your-domain.com
```

## DNS Configuration

Configure your DNS settings to point to your hosting provider and set up the following subdomains:

1. `admin.your-domain.com` - For admin dashboard
2. `supplier.your-domain.com` - For supplier portal
3. `www.your-domain.com` or `your-domain.com` - For main store

## Deployment Steps

### 1. Build the Application

```bash
# Install dependencies
npm install

# Build the application
npm run build
```

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure the following settings in Vercel:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node.js Version: 18.x

3. Add all environment variables from `.env.production` to Vercel's environment variables section

4. Configure custom domains in Vercel:
   - Add your main domain
   - Add subdomains (admin, supplier)
   - Configure SSL certificates

### 3. Database Setup

1. Create a MongoDB Atlas cluster
2. Set up database user and password
3. Configure IP whitelist
4. Update MONGODB_URI in environment variables

### 4. Storage Setup

1. Create an S3 bucket (or equivalent)
2. Configure CORS settings
3. Create IAM user with appropriate permissions
4. Update storage-related environment variables

### 5. Email Setup

1. Set up SMTP service (e.g., SendGrid, Amazon SES)
2. Configure email templates
3. Update SMTP-related environment variables

## Post-Deployment Checklist

1. Verify all subdomains are working:
   - https://admin.your-domain.com
   - https://supplier.your-domain.com
   - https://www.your-domain.com

2. Test authentication flows:
   - Admin login
   - Supplier registration and login
   - Customer registration and login

3. Verify email notifications:
   - Account creation
   - Password reset
   - Order notifications

4. Check image uploads and storage:
   - Product images
   - Store logos
   - User avatars

5. Monitor error logs and analytics

## Security Considerations

1. Ensure all environment variables are properly set
2. Verify SSL certificates are active
3. Check security headers are properly configured
4. Monitor for any security vulnerabilities
5. Set up regular backups of the database

## Maintenance

1. Regular updates:
   ```bash
   npm update
   ```

2. Database backups:
   - Set up automated MongoDB Atlas backups
   - Regular export of critical data

3. Monitoring:
   - Set up uptime monitoring
   - Configure error tracking
   - Monitor performance metrics

## Troubleshooting

1. Check Vercel deployment logs
2. Verify environment variables
3. Check MongoDB connection
4. Verify DNS propagation
5. Check SSL certificate status

## Support

For any deployment issues or questions, please contact the development team or refer to the project documentation. 