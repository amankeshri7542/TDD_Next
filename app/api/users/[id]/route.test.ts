/** @jest-environment node */

import { GET } from './route';
import { POST, resetUsers } from '../route';
import { NextRequest } from 'next/server';

describe('/api/users/[id]', () => {
  beforeEach(async () => {
    resetUsers();
    // Create a user to be used in the tests
    const user = { name: 'John Doe', email: 'john.doe@example.com' };
    const req = new NextRequest('http://localhost/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
    await POST(req);
  });

  // TC_USER_ID_1: successful get user by id
  test('returns a user by id and a 200 status code', async () => {
    const res = await GET(new NextRequest('http://localhost/api/users/1'), { params: { id: '1' } });
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toEqual({ name: 'John Doe', email: 'john.doe@example.com', id: 1 });
  });
});
