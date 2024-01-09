import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-9xl00lb-shard-00-00.dsmj3in.mongodb.net:27017,ac-9xl00lb-shard-00-01.dsmj3in.mongodb.net:27017,ac-9xl00lb-shard-00-02.dsmj3in.mongodb.net:27017/?ssl=true&replicaSet=atlas-7rk7t0-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;

// import mongoose from 'mongoose';
// import { MongoClient, ServerApiVersion } from 'mongodb';

// const connection = () => {

// const uri =  "mongodb+srv://shruti:Database@cluster0.dsmj3in.mongodb.net/?retryWrites=true&w=majority";


// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
// };

// export default connection;