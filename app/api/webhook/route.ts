// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

// 1. GET Handler: Required by Meta to verify your webhook during setup
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Must match the secret token you enter in Meta's Dashboard
  const MY_VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || 'my_portfolio_whatsapp_0xxxxx@$JKHH';

  if (mode === 'subscribe' && token === MY_VERIFY_TOKEN) {
    console.log('Webhook verified successfully by Meta!');
    // Meta requires returning ONLY the hub.challenge string as plain text with HTTP 200
    return new NextResponse(challenge, { status: 200 });
  }

  // Reject invalid verification requests
  return new NextResponse('Forbidden', { status: 403 });
}

// 2. POST Handler: Meta calls this whenever an event or status update occurs
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.object === 'whatsapp_business_account') {
      console.log('Received WhatsApp Webhook Payload:', JSON.stringify(body, null, 2));

      // Always return 200 OK immediately so Meta knows you received the payload
      return NextResponse.json({ status: 'EVENT_RECEIVED' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Not a WhatsApp event' }, { status: 404 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}