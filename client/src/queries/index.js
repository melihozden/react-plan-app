
const {gql} = require('apollo-boost');

//user mutation

export const CREATE_USER = gql`
mutation($email:String! $password:String!) {
  createUser(data: { email:$email password:$password}){
      token
    }
}
`




