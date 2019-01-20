const User = {
	todos: async (parent, args, { Todo }) => {
		return await Todo.find({ userId: parent._id });
	},
	progresses: async (parent, args, { Progress }) => {
		return await Progress.find({ userId: parent._id });
	},
	dones: async (parent, args, { Done }) => {
		return await Done.find({ userId: parent._id });
	}
};

module.exports = User;