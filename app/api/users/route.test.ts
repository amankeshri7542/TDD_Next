/** @jest-environment node */

import { POST } from './route';
import { NextRequest } from 'next/server';

describe('/api/users', () => {
  // TC_USERS_1: successful user creation
  test('creates a new user and returns a 201 status code', async () => {
    const user = { name: 'John Doe', email: 'john.doe@example.com' };
    const req = new NextRequest('http://localhost/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(201);
    expect(data).toEqual({ ...user, id: 1 });
  });

  // TC_USERS_2: missing name property
  test('returns a 400 error when the name property is missing', async () => {
    const user = { email: 'john.doe@example.com' };
    const req = new NextRequest('http://localhost/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data).toEqual({ error: 'Missing name or email' });
  });
});
