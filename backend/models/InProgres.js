const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inProgressSchema = new Schema({
	userId: {
		type: Schema.ObjectId,
		required :true
	},
	inProgressPlan: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('inProgress', inProgressSchema);