interface ContactRequest {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
}

// Simple in-memory rate limiting (resets on cold start)
const rateLimits = new Map<string, { count: number; resetAt: number }>();

export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context;

  // Rate limiting by IP
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const now = Date.now();
  const limit = rateLimits.get(ip);

  if (limit && limit.resetAt > now && limit.count >= 5) {
    return Response.json(
      { success: false, message: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  if (!limit || limit.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour window
  } else {
    limit.count++;
  }

  // Parse body
  let data: ContactRequest;
  try {
    data = await request.json();
  } catch {
    return Response.json(
      { success: false, message: 'Invalid request format.' },
      { status: 400 }
    );
  }

  // Honeypot check
  if (data.website) {
    // Bot detected — return success to not reveal detection
    return Response.json({ success: true, message: "Thanks — I'll be in touch within a day or two." });
  }

  // Validation
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) {
    errors.name = 'Please enter your name';
  }

  if (!data.email?.trim() || !data.email.includes('@') || !data.email.includes('.')) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.message?.trim() || data.message.trim().length < 10) {
    errors.message = 'Please tell me a bit more (at least 10 characters)';
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ success: false, errors }, { status: 400 });
  }

  // TODO: Send email via Resend API when RESEND_API_KEY is configured
  // For now, log the submission and return success
  console.log('Contact form submission:', {
    name: data.name,
    email: data.email,
    message: data.message.substring(0, 100),
    timestamp: new Date().toISOString(),
  });

  return Response.json({
    success: true,
    message: "Thanks — I'll be in touch within a day or two.",
  });
};
