//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('We are unable to connect MongoDB server');
  }

  console.log('Connected to MongoDb server');
  const db = client.db('TodosApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do yet',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert record in todo', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'Ajit',
    age: 25,
    location: 'Bangalore'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to insert a record into server', err);
    }
    console.log(res.ops[0]._id.getTimestamp());
  } )

  client.close();
})
