const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
	userId: {
		type: Schema.ObjectId,
		required :true
	},
	progressPlan: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('progress', progressSchema);