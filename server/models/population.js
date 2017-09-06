const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  female: {
    type: Number,
    required: true,
  },
  male: {
    type: Number,
    required: true,
  },
}, {
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
});

LocationSchema.virtual('total')
  .get(function () {
    return this.female + this.male;
  });


module.exports = mongoose.model('Location', LocationSchema);
