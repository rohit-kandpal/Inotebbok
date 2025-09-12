
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/inotebook';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

module.exports = connectToMongo;
















// const mongoose = require('mongoose');


// const mongoURI = 'mongodb://localhost:27017/inotebook'

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }

// module.exports = connectToMongo;