import { getSession } from "next-auth/client";

import { connectToDatabase } from "../../../lib/db";

async function handler(req: models.Request, res: models.Response): Promise<void> {
    if (req.method !== "DELETE") {
        return;
    }

    const session = await getSession({ req: req });

    if (!session) {
        res.status(401).json({ message: "Not authenticated!" });
        return;
    }

    const userCollectionName = session.user?.name;
    const todo = req.body.todo;

    const client = await connectToDatabase();
    const db = client.db();
    const result = await db.collection(userCollectionName).deleteOne({
        todo
    });

    await client.close();
    if (result.deletedCount === 1) {
        res.status(201).json({ message: "Deleted todo!" });
    }
}

export default handler;
