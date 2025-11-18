import { NextResponse, NextRequest } from 'next/server';
import { getUsers } from '../data';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const users = getUsers();
  const user = users.find((user) => user.id === parseInt(params.id, 10));
  if (user) {
    return NextResponse.json(user, { status: 200 });
  }
  return NextResponse.json({ error: 'User not found' }, { status: 404 });
}
