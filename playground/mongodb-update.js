//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('We are unable to connect MongoDB server');
  }

  console.log('Connected to MongoDb server');
  const db = client.db('TodosApp');

  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID("5b09b9d6a75a2a1b1c2b07e8")
  //   }, {
  //     $set : {
  //       completed: false
  //     }
  //   }, {
  //     returnedOriginal: false
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID("5b09964494690a0d00e0a08d")
    }, {
      $set : {
        name: 'Pai'
      },
      $inc : {
        age: 2
      }
    }, {
      returnedOriginal: true
    })
    .then((res) => {
      console.log(res);
    })

  client.close();
})
