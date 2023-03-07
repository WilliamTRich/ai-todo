import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            res.status(400).json({ error: 'Invalid email or password' });
            return;
        }

        if (!user.password) {
            // handle the case where the user doesn't have a password set
            res.status(400).json({ error: "User password not set" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(400).json({ error: 'Invalid email or password' });
            return;
        }

        res.status(200).json({ message: 'Login successful' });
    }
}