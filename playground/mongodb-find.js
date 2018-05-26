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

  // db.collection('Todos')
  // .find()
  // .count().then ((count) => {
  //   console.log('Todos :', count);
  //
  // }, (err) => {
  //   console.log('Unable to find docs', err);
  // });

  db.collection('Users')
  .find({name: 'Ajit'})
  .toArray().then ((docs) => {
    console.log('Todos :', docs);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find docs', err);
  });


  client.close();
})
