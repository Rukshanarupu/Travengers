const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const DB_USER="Travengers"
const DB_PASS="CNPyf7y7jAH4x5yE"

// const uri = "mongodb://localhost:5000";
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.emaoomz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
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
    const blogCollection = client.db('travengersDb').collection('blogs');
    const destinationCollection = client.db('travengersDb').collection('destinations');
    
    app.get('/blog', async( req, res) => {
      const result = await blogCollection.find().toArray();
      res.send(result);
      // console.log(result)
    })
    app.get('/blog/:id', async (req, res) => {
      const id = req.params.id;   
      try {
        const query = { _id: new ObjectId(id) };
        const blog = await blogCollection.findOne(query);
        res.send(blog);
      } 
      catch (error) {
        res.status(500).json({ error: 'Blog is not found' });
      }
    });

    app.get('/destinations', async( req, res) => {
      const result = await destinationCollection.find().toArray();
      res.send(result);
    })
    app.get('/destination/:id', async (req, res) => {
      const id = req.params.id;   
      try {
        const query = { _id: new ObjectId(id) };
        const result = await destinationCollection.findOne(query);
        res.send(result);
        console.log(result)
        console.log(query);
      } 
      catch (error) {
        res.status(500).json({ error: 'Destination is not found' });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     const userCollection = client.db('usersDB').collection('users');
//     app.get('/users', async( req, res) => {
//         const cursor = userCollection.find()
//         const result = await cursor.toArray();
//         res.send(result);
//     })
//     app.get('/users/:id', async(req, res) => {
//         const id = req.params.id;
//         const query = {_id: new ObjectId(id)}
//         const user = await userCollection.findOne(query);
//         res.send(user);
//     })
//     app.post('/users', async(req, res) => {
//         const user = req.body;
//         console.log('new user', user);
//         const result = await userCollection.insertOne(user);
//         res.send(result);
//     });
//     app.put('/users/:id', async(req, res) =>{
//         const id = req.params.id;
//         const user = req.body;
//         console.log(id, user);
        
//         const filter = {_id: new ObjectId(id)}
//         const options = {upsert: true}
//         const updatedUser = {
//             $set: {
//                 name: user.name,
//                 email: user.email
//             }
//         }

//         const result = await userCollection.updateOne(filter, updatedUser, options );
//         res.send(result);

//     })
//     app.delete('/users/:id', async(req, res) =>{
//         const id = req.params.id;
//         console.log('please delete from database', id);
//         const query = { _id: new ObjectId(id)}
        
//         const result = await userCollection.deleteOne(query);
//         res.send(result);
//     })
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } 
//   finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

app.get('/', (req, res) =>{
    res.send('Travengers IS RUNNING')
})

app.listen(port, () =>{
    console.log(`Travengers is running on port, ${port}`)
})




// try{

// }
// catch{

// }
// finally{
    
// }