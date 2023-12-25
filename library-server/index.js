const express = require('express')
const app = express()
const port = process.env.PORT ||  5000;
require('dotenv').config();
const cors = require('cors')


//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const url = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
     const bookCollections = client.db("BookInventory").collection("books");


     // imsert a book to the db; using post method
     app.post("/upload-book", async(req, res) => {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
     })

     // Get all books from the database
     //app.get("/all-books", async(req, res)=>{
       // const books =  bookCollections.find();
       // const result = await books.toArray();
       // res.send(result);
     //})


     // Update a book data : patch or update methods
     app.patch("/book/:id", async (req, res) => {
        const id = req.params.id; 
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id)};
        const updateDoc = {
            $set: { 
                ...updateBookData
        },
    }
    const options = { upsert: true };
    // update
    const result = await bookCollections.updateOne(filter, updateDoc, options);
    res.send(result);
     })

     // Delete a book data
     app.delete("/book/:id", async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)};
        const result = await bookCollections.deleteOne(filter)
        res.send(result);
     })

     
     // Find book by category
     //app.get("/all-books", async(req, res)=>{
        //let query = {};
        //if(req.query?.category){
            //query = {category: req.query.category}

        //}
        //const result = await bookCollections.find(query).toArray();
        //res.send(result);
     //})

     // Find book by ISBN
     
     app.get("/all-books", async(req, res)=>{
      let query = {};
      if(req.query?.isbn){
          query = {isbn: req.query.isbn}

      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
   })

   // To get single book data from
   app.get("/book/:id", async(req, res)=>{
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await bookCollections.findOne(filter);
    res.send(result);
   })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})