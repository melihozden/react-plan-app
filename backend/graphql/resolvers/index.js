// query resolvers
const Query = require('./queries/Query');
const User = require('./queries/User');
const Todo = require('./queries/Todo');
const Progress = require('./queries/Progress');
const Done = require('./queries/Done');

// mutation resolvers
const Mutation = require('./mutations/index');

module.exports = {
	Query,
	User,
	Todo,
	Progress,
	Done,
	Mutation,
};