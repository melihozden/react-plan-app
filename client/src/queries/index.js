const {gql} = require('apollo-boost');
//user mutation
export const CREATE_USER = gql`
mutation($fullname:String! $email:String! $password:String!) {
  createUser(data: { fullname:$fullname email:$email password:$password}){
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
    id
    fullname
    email
    createdAt
    todos{
      todoPlan
      createdAt
    }
    progresses{
      progressPlan
      createdAt
    }
    dones{
      donePlan
      createdAt
    }
  }
}`

// Profile Todo
export const GET_TODOS = gql`
query {
  todos{
    id
  	todoPlan
    createdAt
    user{
      id 
      email
    }
  }
}
`
export const GET_INPROGRESS = gql`
query {
  progresses{
    id
  	progressPlan
    createdAt
    user{
      id 
      email
    }
  }
}
`
export const GET_DONE = gql`
query {
  dones{
    id
  	donePlan
    createdAt
    user{
      id 
      email
    }
  }
}
`
export const ADD_TODO = gql`
mutation($todoplan:String!  $userId:ID!) {
  createTodo(
    data: {todoPlan:$todoplan, userId:$userId})
     {
    id
  }
}
`


