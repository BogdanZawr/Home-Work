import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addArticle } from '../actions/index';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.clients,
    state,
});

class UserInfo extends React.Component {
    state = {
        user: this.props.user,
        id: this.props.match.params.id,
        state: this.props.state,
    }

    render() {  
        return (
            <div className='userInfo'>
                <img src={this.state.user[this.state.id].general.avatar} alt="NoPic"/>
                <p>{this.state.user[this.state.id].general.firstName} {this.state.user[this.state.id].general.lastName}</p>
                <div>
                    <p>City: {this.state.user[this.state.id].address.city}</p>
                    <p>Country: {this.state.user[this.state.id].address.country}</p>
                    <p>Street: {this.state.user[this.state.id].address.street}</p>
                    <p>Zip Code: {this.state.user[this.state.id].address.zipCode}</p>
                </div>
                <div>
                    <p>Email: {this.state.user[this.state.id].contact.email}</p>
                    <p>Phone: {this.state.user[this.state.id].contact.phone}</p>
                </div>
                <div>
                    <p>Job Company: {this.state.user[this.state.id].job.company}</p>
                    <p>Job Title: {this.state.user[this.state.id].job.title}</p>
                </div>
                <button onClick={this.state.state.deleteUser}>Delete user</button>
            </div>
        );
    }
}

UserInfo.propTypes = {
    getClients: PropTypes.array,
    match: PropTypes.object
};
    
export default connect(mapStateToProps)(UserInfo);