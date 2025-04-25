import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

await client.connect();

console.log("Connected to MongoDB!");

const closeDB = async () => {
  try {
    console.log("Closing database connection...");
    await client.close();
    console.log("Database connection closed.");
    process.exit(0);
  } catch (error) {
    console.error("Error while closing database connection:", error);
    process.exit(1);
  }
};

export { client , closeDB};
