import axios from 'axios';
import { NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2';

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  const queryParams = {};
  
  searchParams.forEach((value, key) => {
    if (key !== 'endpoint') {
      queryParams[key] = value;
    }
  });

  try {
    const response = await API.get(`/${endpoint}`, { params: queryParams });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.response?.data?.message || 'Bir hata oluştu',
      },
      { status: error.response?.status || 500 }
    );
  }
}
