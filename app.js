const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017";

//Database hostname

const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


//Insert document
async function run() {
  try {
    await client.connect();

    const database = client.db("fruitsDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//Find document

async function run() {
  try {
    await client.connect();

    const database = client.db("fruitsDB");
    const movies = database.collection("haiku");

    // Query for a movie that has the title 'The Room'
    const query = { title: "Record of a Shriveled Datum" };


    const movie = await movies.findOne(query);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
