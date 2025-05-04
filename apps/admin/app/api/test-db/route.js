import { NextResponse } from 'next/server';
import { connectDB } from 'db-lib/config/db';
import User from 'db-lib/models/User';

export async function GET() {
  try {
    console.log('Attempting to connect to database...');
    await connectDB();
    console.log('Database connection successful');
    
    // For production, we'll just check the connection without creating a test user
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json({ 
        success: true, 
        message: 'Database connection successful',
        environment: process.env.NODE_ENV
      });
    }
    
    // Only create test user in development
    console.log('Creating test user...');
    const testUser = await User.create({
      name: 'Test Admin',
      email: 'admin@test.com',
      password: 'test123',
      role: 'admin',
    });
    console.log('Test user created successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      user: testUser,
      environment: process.env.NODE_ENV
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Database connection failed',
      error: error.message,
      environment: process.env.NODE_ENV,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 