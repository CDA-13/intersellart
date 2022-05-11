var mongoose = require("mongoose");

var PublicationSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    picture: {
        data: Buffer,
        contentType: String
    },
});

module.exports = mongoose.model("Publication", PublicationSchema, "publications");
