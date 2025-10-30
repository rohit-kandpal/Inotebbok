
// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://localhost:27017/inotebook';

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI); // ✅ Removed deprecated options
//     console.log('✅ MongoDB connected successfully');
//   } catch (error) {
//     console.error('❌ MongoDB connection error:', error.message);
//   }
// };

// module.exports = connectToMongo;

const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors'); 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Availabale Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})

