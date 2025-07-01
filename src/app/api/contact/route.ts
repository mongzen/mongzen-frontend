import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const strapiUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

    // Forward the request to Strapi
    const response = await fetch(`${strapiUrl}/contact-forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Strapi error:', errorData);

      return NextResponse.json(
        {
          error: {
            message:
              errorData.error?.message || 'Failed to submit contact form',
          },
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        error: {
          message: 'Internal server error',
        },
      },
      { status: 500 }
    );
  }
}
