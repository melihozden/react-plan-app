const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	isValid:{
		type: Boolean,
		required : true,
		default : 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

userSchema.pre('save',function(next){
	if (!this.isModified('password')) {
	  return next()
	}

	bcrypt.hash(this.password, 10)
		.then(hash => {
			this.password = hash;
			next();
		});	
});

module.exports = mongoose.model('user', userSchema);