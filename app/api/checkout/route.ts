import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICES: Record<string, { name: string; amount: number; description: string }> = {
  symposium_early: {
    name: "Symposium Pass — Early Access",
    amount: 9500,
    description: "Saturday May 30 · Full access to the leadership symposium",
  },
  symposium_standard: {
    name: "Symposium Pass — Standard",
    amount: 12500,
    description: "Saturday May 30 · Full access to the leadership symposium",
  },
  full_early: {
    name: "Full Experience — Early Access",
    amount: 14500,
    description: "Friday May 29 + Saturday May 30 · Access to both experiences",
  },
  full_standard: {
    name: "Full Experience — Standard",
    amount: 17500,
    description: "Friday May 29 + Saturday May 30 · Access to both experiences",
  },
  lab_early: {
    name: "Strategy Lab — Early Access",
    amount: 4500,
    description: "Friday May 29 · Structured pre-symposium experience",
  },
  lab_standard: {
    name: "Strategy Lab — Standard",
    amount: 6500,
    description: "Friday May 29 · Structured pre-symposium experience",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json() as {
      items: { priceKey: string; quantity: number }[];
    };

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? req.nextUrl.origin;

    const line_items = items
      .filter((i) => i.quantity > 0)
      .map((item) => {
        const price = PRICES[item.priceKey];
        if (!price) throw new Error(`Unknown price key: ${item.priceKey}`);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: price.name,
              description: price.description,
            },
            unit_amount: price.amount,
          },
          quantity: item.quantity,
        };
      });

    if (line_items.length === 0) {
      return NextResponse.json({ error: "No items selected" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#tickets`,
      metadata: { event: "Built for More — May 29-30, 2026" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
