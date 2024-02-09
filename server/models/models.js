// Using Node.js `require()`
const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'CRUD'
})
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: {type: string, required: true},
})

const Task = mongoose.model('task', taskSchema);

module.exports = Task;