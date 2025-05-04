import { NextResponse } from 'next/server';
import { connectDB } from 'db-lib/config/db';
import User from 'db-lib/models/User';

export async function GET() {
  try {
    console.log('Attempting to connect to database...');
    await connectDB();
    console.log('Database connection successful');
    
    // Try to create a test user
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
      user: testUser 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Database connection failed',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 