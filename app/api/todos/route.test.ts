/** @jest-environment node */

import { GET } from './route';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

describe('/api/todos', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // TC_TODOS_1: successful fetch
  test('returns todo list successfully', async () => {
    const mockTodos = [
      { id: 1, title: 'Test todo', completed: false },
      { id: 2, title: 'Another todo', completed: true },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTodos),
      } as unknown as Response)
    ) as jest.Mock;

    const res = await GET();
    const data = await res.json();

    // fetch must be called with correct URL
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(TODOS_URL);

    // Response must be OK
    expect(res.status).toBe(200);
    expect(data).toEqual(mockTodos);
  });

  // TC_TODOS_2: non-ok response
  test('returns 500 when external API responds with non-ok status', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      } as unknown as Response)
    ) as jest.Mock;

    const res = await GET();
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data).toEqual({ error: 'Failed to fetch todos' });
  });

  // TC_TODOS_3: fetch throws error
  test('returns 500 when external API request throws', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Network error'))
    ) as jest.Mock;

    const res = await GET();
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data).toEqual({ error: 'Failed to fetch todos' });
  });
});