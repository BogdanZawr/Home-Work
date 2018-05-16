import React from 'react';

import User from './User';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends React.Component {

    render() {
        return (
            <div>
                {this.props.clietsAfterSearth.map((client, index) => {      
                    return <User
                        key= {client.address.zipCode}
                        client= {client}
                        index= {index}
                    />;
                }
                )}
            </div>
        );
    }
}

ConnectedList.propTypes = {
    clietsAfterSearth: PropTypes.array,
    onAddUserInfo: PropTypes.func
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;