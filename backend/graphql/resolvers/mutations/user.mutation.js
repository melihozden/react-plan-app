module.exports = {
	createUser: async (parent, { data: { email, password } }, { User }) => {
		const user = await User.findOne({ email });
 		if (user) {
		  throw new Error('User already exists.');
		}
 		return await new User({
			email,
			password
		}).save();
	}
};