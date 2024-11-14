import { adminDB } from "@/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        // Parse the JSON body
        const reqBody = await request.json();
        const { cart = [], email, id, totalAmt = 0 } = reqBody || {};  // Set defaults in case properties are missing

        // Validate required fields
        if (!email || !id || !Array.isArray(cart)) {
            throw new Error("Invalid input: Missing email, id, or cart data.");
        }

        // Prepare the order item
        const orderItem = {
            amount: totalAmt,
            items: cart,
        };

        // Firestore operations only if there are items in the cart
        if (cart.length) {
            const userOrdersRef = adminDB
                .collection("users")
                .doc(email)
                .collection("orders")
                .doc(id);

            const userDoc = await userOrdersRef.get();
            if (!userDoc.exists) {
                await userOrdersRef.set({ email });
            }

            await userOrdersRef.set({ value: orderItem }, { merge: true });
        }

        // Success response
        return NextResponse.json(
            {
                success: true,
                message: "Order Successfully Saved",
            },
            { status: 200 }
        );
    } catch (error) {
        // Handle and return errors in a serializable way
        return NextResponse.json(
            {
                success: false,
                message: error || "An unexpected error occurred",
            },
            { status: 500 }
        );
    }
};
