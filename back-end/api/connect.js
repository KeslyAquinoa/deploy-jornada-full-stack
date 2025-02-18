import {MongoClient} from "mongodb"


const URI = "mongodb+srv://keslyferreira25:zQlDht1axkV98d51@cluster0.q4lym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula")
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection)
