import { NextResponse, NextRequest } from 'next/server';

let users = [];
let lastId = 0;

export async function POST(req: NextRequest) {
  const user = await req.json();

  if (!user.name || !user.email) {
    return NextResponse.json(
      { error: 'Missing name or email' },
      { status: 400 }
    );
  }

  lastId++;
  const newUser = { ...user, id: lastId };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
