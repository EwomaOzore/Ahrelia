const Mongoose = require("mongoose");

const ImageSchema = new Mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
});

const Image = Mongoose.model("image", ImageSchema);

module.exports = Image;