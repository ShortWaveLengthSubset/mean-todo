var mongoose = require('mongoose');

// define model ============================
module.exports = mongoose.model('Todo', {
    text : {type: String, default: ' '}
});