var mongoose = require('mongoose');



var eventSchema = mongoose.Schema({
    monitor: {type: String, required: true},
    type: {type: Number, required: true},
    time: {type: Number, required: true},
    createdAt: Date

});

eventSchema.statics.types = Object.freeze({"up": 1, "down": 2});

eventSchema.pre('save', function (next) {
    this.createdAt = Date.now();
    next();
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
