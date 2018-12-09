module.exports = {
	createTodo: async (parent, { data: { userId, todoPlan } }, { Todo }) => {
		return await new Todo({
			userId,
			todoPlan
		}).save();
	}
}; 