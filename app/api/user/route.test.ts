/** @jest-environment node */
import { GET } from './route';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'Mocked User', age: 21 }),
    })
  ) as jest.Mock;
});

test('GET /api/user returns mocked user', async () => {
  const res = await GET();
  const data = await res.json();

  expect(data).toEqual({ name: 'Mocked User', age: 21 });
});