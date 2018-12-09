// query resolvers
const Query = require('./queries/Query');
const Todo = require('./queries/Todo');
const User = require('./queries/User');

// mutation resolvers
const Mutation = require('./mutations/index');

module.exports = {
	Query,
	Todo,
	User,
	Mutation,
};