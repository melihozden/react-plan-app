const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	userId: {
		type: Schema.ObjectId,
		required :true
	},
	todoPlan: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('todo', todoSchema);