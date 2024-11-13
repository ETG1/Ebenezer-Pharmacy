import { ProductData } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe"

export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
    try {
        const reqBody = await request.json();
        const {items, email} = await reqBody;
        const extractingProducts = await items?.map((item:ProductData) => ({
            quantity: item?.quantity, price_data: {
                currency: "zar", unit_amount: Math.round(item.price * 100), product_data: {
                    name: item?.title,
                },
            },
        }));
        const origin = request.headers.get("origin");
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: extractingProducts,
            mode: "payment",
            success_url: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel/?canceled=true`,
            metadata: {
                email,
            },
        });
        return NextResponse.json(
            { url: session?.url },
            {status: 200},
        );
    }
    catch(error) {
        return NextResponse.json({error : error}, {status: 500})
    }
};