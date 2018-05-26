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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'})
  // .then((res) => {
  //   console.log(res);
  // })

  //findOneAndDelete
  // db.collection('Todos')
  //   .findOneAndDelete({completed: false})
  //   .then((res) => {
  //     console.log(res);
  //   })

  // db.collection('Users')
  //   .deleteMany({name: 'Ajit'})
  //   .then((res) => {
  //     console.log(res);
  //   });

  db.collection('Users')
    .deleteOne({_id: new ObjectID("5b09a0b0cea9351b30359698")})
    .then((res) => {
      console.log(res);
    })

  client.close();
})
