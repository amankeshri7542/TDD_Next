/** @jest-environment node */

import { GET } from './route';

test('GET /api/hello returns hello message', async () => {
  const res = await GET();
  const data = await res.json();

  expect(res.status).toBe(200);
  expect(data).toEqual({ message: 'Hello from API' });
});