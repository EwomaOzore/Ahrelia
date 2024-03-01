const Mongoose = require("mongoose");

const ReviewSchema = new Mongoose.Schema({
    header: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
});

const Review = Mongoose.model("review", ReviewSchema);

module.exports = Review;