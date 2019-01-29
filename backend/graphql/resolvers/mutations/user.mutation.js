const bcrypt = require('bcrypt') ;
const token = require('../../../helper/token')
module.exports = {
	createUser: async (parent, { data: { fullname, email, password } }, { User }) => {
		const user = await User.findOne({ email });
 		if (user) {
		  throw new Error('User already exists.');
		}
		fullname = fullname.replace(/ /g, "");
		fullname = fullname.toLowerCase();
		fullname = fullname.trim();
 		const newUser =  await new User({
    		fullname,
			email,
			password
		}).save();
		return {token: token.generate(newUser, '1h' )}

	},
	signIn: async (parent,{data: { email , password } },{ User })=>{
		const user = await User.findOne({ email })
		if(!user){
			throw new Error('User could not find!')
		}
		const validPass = await bcrypt.compare(password,user.password) 
		if(!validPass){
			throw new Error('Password is wrong!')
		}

		return {token: token.generate(user, '1h' )}
	}
};