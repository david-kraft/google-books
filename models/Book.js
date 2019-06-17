// At a minimum, books should have each of the following fields:
// title - Title of the book from the Google Books API
// authors - The books's author(s) as returned from the Google Books API
// description - The book's description as returned from the Google Books API
// image - The Book's thumbnail image as returned from the Google Books API
// link - The Book's information link as returned from the Google Books API

const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const BookSchema = new Schema({

    // `title` is required and of type String
    title: {
        type: String,
        required: true
    },
    
    // Authors will be an array
    authors: {
        type: Array,
        required: true
    },

    // Description is a long string
    description: {
        type: String,
        required: true
    },

    // Image is going to be a URL
    image: {
        type: String,
    },

    // Link is also going to be a URL
    link: {
        type: String
    },

    // `summary` is required and of type String
    summary: {
        type: String,
        required: true
    },
    
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// This creates our model from the above schema, using mongoose's model method
let Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
