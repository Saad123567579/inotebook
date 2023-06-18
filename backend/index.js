//index.js

const connectToMongo = require('./db');
const express = require('express');
const app = express();
connectToMongo();
const port =  5000;

let server;
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server has been gracefully terminated');
    process.exit(0);
  });
});






























// const connectToMongo = require('./db');
// const express = require('express');
// const app = express();
// connectToMongo();
// const port = process.env.PORT || 3000;

// let server; 


// // app.get('/', (req, res) => {
// //   res.send('Hello world');
// // });

// app.use('/api/auth',require('./routes/auth'));
// // app.use('/api/notes',require('./routes/notes'));


// server = app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// server.close(() => {
//     console.log('Server has been gracefully terminated');
//     process.exit(0);
//   });



  // Declare the server variable
// process.on('SIGINT', () => {
//     server.close(() => {
//       console.log('Server has been gracefully terminated');
//       process.exit(0);
//     });
//   });