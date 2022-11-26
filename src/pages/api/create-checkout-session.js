const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)
console.log("hello world")
export default async (req, res) => {
    const { items, email } = req.body;

    const transformedItems = items.map((item => item({
        description: item.description,
        quantity: 1,
        price_data:{
            currency: 'etb',
            unit_amount: item.price * 100,
            product_data:{
                name: item.title,
                images: [item.image],
            },
        },
})));
const session= await stripe.checkout.sessions.create({
payement_method_types:['card'],
shipping_rates:[shr_1M8HCiIu1Q3Kc9AcsH4VXi21],
shipping_address_collection:{
    allowed_countries:['US','CA','ETB']
},
line_items:transformedItems,
mode:'payement',
success_url: `${process.env.Host}/success`,
cancel_url: `${process.env.Host}/checkout`,
metadata:{
    email,
    images:JSON.stringify(items.map(item=>item.image))
}
});
res.status(200).json({id:session.id})
};