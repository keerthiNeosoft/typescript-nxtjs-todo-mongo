import { getSession } from "next-auth/client";

import { connectToDatabase } from "../../../lib/db";
import { Session } from "next-auth";
import { IncomingMessage } from "http";

async function handler(req: models.Request, res: models.Response): Promise<void> {
  if (req.method !== "POST") {
    return;
  }

  const session: Session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userCollectionName = session.user?.name;
  const todo = req.body.todo;
  const client = await connectToDatabase();
  const db = client.db();
  const result: models.Response = await db.collection(userCollectionName).insertOne({
    todo: todo,
  });

  client.close();
  res.status(201).json({ message: "Created todo!" });
}

export default handler;
