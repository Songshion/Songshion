const { Schema, model } = require('mongoose');

const concertSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
)

const Concert = model('Concert', concertSchema)

module.exports = Concert;