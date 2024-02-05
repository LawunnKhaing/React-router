// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const contact_router = require('./routes/contactRoutes');

// const app = express();

// const port = process.env.PORT || 3000;
// app.use(cors());
// app.use(contact_router);

// // Hardcoded MongoDB connection string
// const mongoURI = 'mongodb+srv://Lawunn:BlackPink1@cluster.1qhaeok.mongodb.net/Contact';

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

require('dotenv').config();
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contact_router = require('./routes/contactRoutes');

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(contact_router);

const mongoURI = process.env.MONGODB_URI || 'fallback_connection_string';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
