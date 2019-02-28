
 const express = require('express');
 const mongoose = require('mongoose');
 const jwt = require('jsonwebtoken');
 require('dotenv').config();
 
 const { ApolloServer } = require('apollo-server-express');
 const { importSchema } = require('graphql-import');
 
 const resolvers = require('./graphql/resolvers/index');
 // models
 const User = require('./models/User');
 const Todo = require('./models/Todo');
const Progress = require('./models/Progress');
const Done = require('./models/Done');

const Mail = require('./mail')

console.log(Mail)

const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema.graphql'),
	resolvers,
	context:({ req })=> ({
		User,
		Todo,
		Progress,
		Done,
		activeUser : req.activeUser
	})
});
  mongoose
 	.connect(process.env.DB_URI, { useNewUrlParser: true,useCreateIndex:true })
     .then(() => console.log('MongoDB connection success'))
     .catch(e => console.log('MongoDB connection failure,more info: '+e))
 
 const app = express();
 const app2 = express();

app.use( async (req,res,next)=>{
	const token = req.headers['authorization']
	if(token && token !== 'null'){
		console.log(token)
		try{
			const activeUser = await jwt.verify(token,process.env.SECRET_KEY)
			req.activeUser = activeUser
			console.log(activeUser)
		}catch(e){
			console.log(e)
		}
	}
	next() ;
})

 server.applyMiddleware({ app });

 app.listen({ port: 4001 }, () => {
 	console.log(`🚀 Backend server is ready at http://localhost:4001${server.graphqlPath}`);
 });
//  app2.listen({ port: 4002 }, () => {
// 	console.log(`✉️  Mail server is active at http://localhost:4002`);
// });



