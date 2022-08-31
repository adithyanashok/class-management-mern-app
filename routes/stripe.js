import express from "express";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51LUSnZA4Kwx24aJ87m1GnYdajqpUbRe5EH16EZlSmyJnIGRXYoagO7GeUcyPae5DWOjiUYCRdQ0SW1iEjDnXBxpN00r2bRRXKQ");
const router = express.Router();

router.post("/payment", (req, res, next) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        next(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
