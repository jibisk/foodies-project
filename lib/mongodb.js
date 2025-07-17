import { MongoClient } from 'mongodb';

// MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/my_nextjs_db
// const connctionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_database}.vs2pm.mongodb.net/myBlog?retryWrites=true&w=majority`
// const connctionString = process.env.MONGODB_URI;

const uri = `mongodb+srv://jibisk:jibisk@cluster0.okngbhy.mongodb.net/meals_db`;
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
