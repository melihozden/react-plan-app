import React, { Component } from 'react';
import '../css/profile.css'
// import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query, Mutation } from 'react-apollo';
import { GET_ACTIVE_USER, ADD_PROGRESS } from '../queries/index';

class Progress extends Component {
    state = {
        isHidden: true,
        progressplan: '',
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
        const { progressplan } = this.state
        return !progressplan
    }
    onSubmit = (e, addprogress) => {
        e.preventDefault();
        if (!this.formValidate()) {
            addprogress().then(({ data }) => {
                this.setState({
                    progressplan: ''
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
                    <span className="quantity">{this.props.quantity}</span> In Progress
                    <button className="form-button"><i class="fas fa-ellipsis-h fa-2x"></i></button>
                    <button className="form-button" onClick={this.toggleHidden}><i className="fas fa-plus fa-2x"></i></button>
                    <Mutation mutation={ADD_PROGRESS} variables={{ ...this.state }} refetchQueries={[{ query: GET_ACTIVE_USER }]}>
                        {
                            (addProgress, { loading, error }) => (

                                <div className='toggleForm-div' hidden={this.state.isHidden}>

                                    <textarea value={this.state.progressplan} className="textarea" name="progressplan" onChange={this.onChange} />
                                    <div className="button-group">
                                        <input value="Add" type="submit" className="add-button" onClick={e => {
                                            this.onSubmit(e, addProgress)
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
                                        There is no in progress plan<i class="far fa-frown fa-2x"></i>
                                    </div>
                                )
                            }
                            if (loading) return <div>Loading Progresses</div>
                            if (error) return <div>Progresses Error</div>
                            console.log(data)
                            return (
                                <div className="new-div">
                                    <div className="ul-field" id="ul-deger">
                                        {
                                            // https://yuilibrary.com/yui/docs/dd/scroll-list.html
                                            data.activeUser.progresses.map(progress => (
                                                <div className="out-div-li">
                                                    <span className="li-menu">
                                                        <button className="li-menu-top-right-button"><i class="fas fa-ellipsis-h fa-lg"></i></button>
                                                    </span>
                                                    <div key={progress.id} className="li-field">
                                                        {progress.progressPlan}
                                                    </div>
                                                    <span className="date">
                                                        <Moment fromNow>{progress.createdAt}</Moment>
                                                    </span>
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    }
                </Query>
            </div>
        );
    }
}

export default Progress;