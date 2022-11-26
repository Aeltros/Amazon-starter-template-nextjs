// nextconfig.js

const { default: Stripe } = require("stripe");

module.exports={

images:{
    domains:['links.papareact.com','fakestoreapi.com' ]
},

env:{
    Stripe_Public_key: process.env.STRIKE_PUBLIC_KEY
}


}