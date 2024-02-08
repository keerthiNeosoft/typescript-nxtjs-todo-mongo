import { connectToDatabase } from "../../../lib/db";

async function handler(req: models.Request, res: models.Response) {
  if (req.method !== "GET") {
    return;
  }

  const userCollectionName = req.url.split("?")[1];

  const client = await connectToDatabase();
  const db = client.db();
  const result = await db.collection(userCollectionName).find();
  const data = await result.toArray();

  client.close();
  res.status(201).json(data);
}

export default handler;
