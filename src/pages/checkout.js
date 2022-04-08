import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { productTotal } from "../slices/basketSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function Checkout() {
  const items = useSelector((state) => state.basket.items);
  const { data: session } = useSession();
  const total = useSelector(productTotal);
  
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    //create session
    const checkoutSession = await axios.post("/api/checkout_sessions", {
      items,
      email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex flex-col p-5 space-y-12 mb-4">
          <h1 className=" text-3xl pb-4 border-b">
            {items.length === 0
              ? "Your Shopping cart is empty"
              : "Shopping Cart"}
          </h1>
          {items.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              ratings={item.ratings}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              prime={item.prime}
            />
          ))}
        </div>
        {items.length > 0 && (
          <div className="flex flex-col p-10 bg-white shadow-md">
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal({items.length}):
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                onClick={handleCheckout}
                disabled={!session}
                role="link"
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed border-gray-200"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
