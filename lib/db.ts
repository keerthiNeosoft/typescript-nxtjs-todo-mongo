import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://keerthigadipelli:wPXjSdZnxn2ut0Uu@keerthicluster0.ddofmks.mongodb.net/ts_next_auth?retryWrites=true&w=majority"
  );

  return client;
}
