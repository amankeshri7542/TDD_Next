import { NextResponse, NextRequest } from 'next/server';
import { getUsers, addUser, resetUsers as reset } from './data';

export function resetUsers() {
  reset();
}

export async function POST(req: NextRequest) {
  const user = await req.json();

  if (!user.name || !user.email) {
    return NextResponse.json(
      { error: 'Missing name or email' },
      { status: 400 }
    );
  }

  const newUser = addUser(user);
  return NextResponse.json(newUser, { status: 201 });
}

export async function GET() {
  return NextResponse.json(getUsers(), { status: 200 });
}
