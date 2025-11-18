import { NextResponse } from 'next/server';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function GET() {
  try {
    const response = await fetch(TODOS_URL);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch todos' },
        { status: 500 }
      );
    }

    const todos = await response.json();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    // Network error / fetch throws
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}