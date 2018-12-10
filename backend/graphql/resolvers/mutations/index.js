const user = require('./user.mutation');
const todo = require('./todo.mutation');
const progress = require('./progress.mutation');
const done = require('./done.mutation');

const Mutation = {
	...user,
	...todo,
	...progress,
	...done
};

module.exports = Mutation;