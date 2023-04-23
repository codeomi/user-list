const MongoClient = require("mongodb");

exports.fetchUsers = async () => {
  const dbName = "oruPhones";
  const collectionName = "sample_data";
  const uri = process.env.DB_URI
//   console.log(process.env.DB_URI)
// const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
// const db = client.db(dbName);
// const collection = db.collection(collectionName);

// const documents = await collection.find({}).toArray();
const docs =  collectionName.find()
console.log(docs)



};
