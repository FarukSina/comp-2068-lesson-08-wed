const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type:String,
        required:false,
        default: "Unknown"
    },
    date: {
        type: Date,
        default: new Date(),
        required: true
      }
}, {
  timestamps: true
});
module.exports = mongoose.model('Person', PersonSchema);
