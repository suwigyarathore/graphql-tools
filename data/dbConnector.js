import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongod://localhost/friends', {
  useMongoClient: true
}, callback);

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
});

const Friends = mongoose.model('friends', friendSchema);

export { Friends };
