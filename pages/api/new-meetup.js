import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;
      
      const client = await MongoClient.connect("mongodb+srv://morashid299:yqWM2dzO4b4JrJm3@cluster0.lih94vd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

export default handler;
