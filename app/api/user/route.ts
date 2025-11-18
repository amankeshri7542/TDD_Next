import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://api.example.com/user');
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}