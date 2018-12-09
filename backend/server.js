
 const express = require('express');
 const mongoose = require('mongoose');
 require('dotenv').config();
 
 const { ApolloServer } = require('apollo-server-express');
 const { importSchema } = require('graphql-import');
 
 const resolvers = require('./graphql/resolvers/index');
 // models
const User = require('./models/User');
const Todo = require('./models/Todo');
 const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema.graphql'),
	resolvers,
	context: {
		User,
		Todo
	}
});
  mongoose
 	.connect(process.env.DB_URI, { useNewUrlParser: true })
     .then(() => console.log('MongoDB connection success'))
     .catch(e => console.log('MongoDB connection failure,more info: '+e));
 
 const app = express();
 server.applyMiddleware({ app });
 
 app.listen({ port: 4001 }, () => {
 	console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
 });
