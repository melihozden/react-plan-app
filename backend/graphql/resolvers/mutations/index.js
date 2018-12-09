const user = require('./user.mutation');
const todo = require('./todo.mutation');

const Mutation = {
	...user,
	...todo,
};

module.exports = Mutation;