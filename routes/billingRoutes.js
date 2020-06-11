const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
            const charge = await stripe.charges.create({
                amount: 500,
                description: 'Adding credits 5$',
                currency: 'usd',
                source: req.body.id
            });
            req.user.credits += 5;
            const user = await req.user.save();

            res.send(user);
        }
    );
};