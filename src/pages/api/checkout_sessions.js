const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;
  const transformItem = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: 1,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: transformItem,
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    shipping_rates: ["shr_1KORhDFthq0D0sgz3cO10TAZ"],
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${req.headers.origin}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({id:session.id})
};
