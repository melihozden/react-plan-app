
const {gql} = require('apollo-boost');

//user mutation

export const CREATE_USER = gql`
mutation($email:String! $password:String!) {
  createUser(data: { email:$email password:$password}){
      token
    }
}
`

export const SIGNIN_USER = gql`
mutation($email:String! $password:String!) {
  signIn(data: { email: $email, password: $password }) {
    token
  }
}
`
export const GET_ACTIVE_USER = gql`
query{
  activeUser{
    email
    createdAt
    todos{
      todoPlan
    }
  }
}
`





