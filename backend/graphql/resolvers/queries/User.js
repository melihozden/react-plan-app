const User = {
	todos: async (parent, args, { Todo }) => {
		return await Todo.find({ userId: parent._id });
	}
};

module.exports = User;