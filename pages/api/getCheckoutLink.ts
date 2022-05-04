// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../src/middleware/mongodb';
import User from '../../src/models/user';
import { LEARNING_PLANS } from '../../src/constants/plans';

type Data = {
  link?: string;
  error?: any;
};

type Request = {
  email: string;
  name: string;
  telegram: string;
  isCrypto: boolean;
  plan: keyof typeof LEARNING_PLANS;
};
async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const body = JSON.parse(req.body);
    const { email, name, telegram, isCrypto, plan } = body as Request;
    console.log(email, name, telegram, isCrypto, plan);
    const currentPlan = LEARNING_PLANS[plan];
    const paymentLink = isCrypto ? currentPlan.crypto.link : currentPlan.card.link;

    const user = new User({
      name,
      email,
      telegram,
      plan,
      payment_method: isCrypto ? 'crypto' : 'card',
    });
    await user.save();

    res.status(200).json({ link: paymentLink });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default connectDB(handler);
