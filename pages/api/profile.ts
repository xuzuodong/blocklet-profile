import { NextApiResponse } from 'next';
import { db } from '../../lib/db';

const DEFAULT_PROFILE = { key: 'profile', name: 'initial', email: 'initial@example.com', phone: '+1 1234 5678' };

export default async function handler(req, res: NextApiResponse) {
  if (req.method === 'GET') {
    const profile = await db.findOne({ key: 'profile' });
    res.status(200).json(profile || (await db.insert(DEFAULT_PROFILE)));
  } else if (req.method === 'PUT') {
    await db.update({ key: 'profile' }, { $set: req.body }, { returnUpdatedDocs: true });
    res.status(200).send('Profile updated');
  }
}
