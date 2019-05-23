import React, { Component } from 'react';
import '../css/profile.css';
// import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query, Mutation } from 'react-apollo';
import { GET_ACTIVE_USER, ADD_TODO } from '../queries'
import { Spinner, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import {  } from "tailwindcss";

class Todo extends Component {
    state = {
        isHidden: true,
        todoplan: '',
        userId: ''
    }
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    formValidate = () => {
        const { todoplan } = this.state
        return !todoplan
    }
    onSubmit = (e, addTodo) => {
        e.preventDefault();
        if (!this.formValidate()) {
            addTodo().then(({ data }) => {
                this.setState({
                    todoplan: ''
                })
            })
        }
    }
    componentDidMount() {
        //   console.log(this.props)
        this.setState({
            userId: this.props.id
        })
    }

    render() {
        return (


            <div className="outdiv">
                <div className="div-header">
                    <span className="quantity">{this.props.quantity}</span> To do
               <Dropdown className="form-button" isOpen={false} toggle={this.toggle}>
                        <DropdownToggle caret size="sm"><i class="fas fa-ellipsis-h fa-2x"></i></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {/* <button className="form-button"><i class="fas fa-ellipsis-h fa-2x"></i></button> */}
                    <button className="form-button" onClick={this.toggleHidden}><i className="fas fa-plus fa-2x"></i></button>

                    <Mutation mutation={ADD_TODO} variables={{ ...this.state }} refetchQueries={[{ query: GET_ACTIVE_USER }]}>
                        {
                            (addTodo, { loading, error }) => (

                                <div className='toggleForm-div' hidden={this.state.isHidden}>

                                    <textarea value={this.state.todoplan} className="textarea" name="todoplan" onChange={this.onChange} />
                                    <div className="button-group">
                                        <input value="Add" type="submit" className="add-button" onClick={e => {
                                            this.onSubmit(e, addTodo)
                                        }} />
                                        <button className="cancel-button" onClick={this.toggleHidden}>Cancel</button>
                                    </div>

                                </div>
                            )
                        }
                    </Mutation>


                </div>

                <Query query={GET_ACTIVE_USER}>
                    {
                        ({ data, loading, error }) => {

                            if (this.props.quantity === 0) {
                                return (
                                    <div className="no-content">
                                        There is no todo plan <i class="far fa-frown fa-2x"></i>
                                    </div>
                                )
                            }
                            if (loading) return <Spinner color="secondary" />
                            if (error) return <div>Todo Error</div>
                            // console.log(data)
                            return (
                                <div className="new-div">
                                    {/* {this.state.isHidden && <Child/>} */}


                                    {
                                        // https://yuilibrary.com/yui/docs/dd/scroll-list.html
                                        data.activeUser.todos.map(todos => (
                                            <div className="out-div-li">
                                                <span className="li-menu">
                                                    <button className="li-menu-top-right-button"><i class="fas fa-ellipsis-h fa-lg"></i></button>
                                                </span>
                                                <div key={todos.id} className="li-field">
                                                    {todos.todoPlan}
                                                </div>
                                                <span className="date">
                                                    <Moment fromNow>{todos.createdAt}</Moment>
                                                </span>
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            )
                        }
                    }
                </Query>
            </div>

        );
    }
}

export default Todo;