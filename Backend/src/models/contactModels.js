const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    first: String,
    last: String,
    twitter: String,
    avatarUrl: String,
    notes: String,
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  module.exports = Contact;
