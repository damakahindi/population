const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  female: {
    type: String,
    required: true,
  },
  male: {
    type: String,
    required: true,
  },
});

LocationSchema.virtual('total')
  .get(function () {
    return this.female + this.male;
  });


module.exports = mongoose.model('Location', LocationSchema);
