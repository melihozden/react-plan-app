const Query = {
	user: async (parent, args, { User }) => {
		return await User.findById(args.id);
	},
	users: async (parent, args, { User }) => {
		return await User.find({}).sort({ 'createdAt': 'desc'})
	},
	todo: async (parent, args, { Todo }) => {
		return await Todo.findById(args.id);
	},
	todos: async (parent, args, { Todo }) => {
		return await Todo.find({}).sort({ 'createdAt': 'desc'})
	},
	progress: async (parent, args, { Progress }) => {
		return await Progress.findById(args.id);
	},
	progresses: async (parent, args, { Progress }) => {
		return await Progress.find({}).sort({ 'createdAt': 'desc'})
	},
	done: async (parent, args, { Done }) => {
		return await Done.findById(args.id);
	},
	dones: async (parent, args, { Done }) => {
		return await Done.find({}).sort({ 'createdAt': 'desc'})
	},
};

module.exports = Query;