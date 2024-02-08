import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req: models.Request, res: models.Response): Promise<void> {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Not Authorized" });
  }

  const data = req.body;

  const { username, password } = data;

  if (
    !username ||
    username.trim().length < 3 ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ username });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    username: username,
    password: hashedPassword,
  });

  client.close();
  res.status(201).json({ message: "Created user!" });
}

export default handler;
