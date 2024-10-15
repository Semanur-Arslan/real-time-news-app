import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const { categories, sources } = await request.json();

    if (!Array.isArray(categories) || !Array.isArray(sources)) {
      return new Response(JSON.stringify({ error: 'Invalid categories or sources.' }), { status: 400 });
    }

    const preferences = { categories, sources };
    const cookieStore = cookies();
    cookieStore.set('userPreferences', JSON.stringify(preferences), {
      path: '/',
      httpOnly: true,
    });

    return new Response(JSON.stringify(preferences), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save preferences.' }), { status: 500 });
  }
}

export async function GET(request) {
  const cookieStore = cookies();
  const userPreferences = cookieStore.get('userPreferences');

  if (!userPreferences) {
    return new Response(JSON.stringify({ categories: [], sources: [] }), { status: 200 });
  }

  try {
    const preferences = JSON.parse(userPreferences.value);
    return new Response(JSON.stringify(preferences), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to retrieve preferences.' }), { status: 500 });
  }
}
