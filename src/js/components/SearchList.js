import React from 'react';
import List from './List';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import clients from '../../clients.json';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
    constructor() {        
        super();
        this.onChangeInput = this.onChangeInput.bind(this);
        this.timeOutValue = this.timeOutValue.bind(this);
        this.state = {
            сlientsAfterShearch: clients,
            timeOut: {}
        };
    }

    timeOutValue(e) {
        let text = e.target.value;
        let timer = setTimeout(this.onChangeInput, 1000, text);
        clearTimeout(this.state.timeOut);
        this.setState({ timeOut: timer });
    }

    onChangeInput(text) {
        let input = text.toLowerCase();
        this.setState({ сlientsAfterShearch:
            clients.filter((client, index) => {
                let fullName = client.general.firstName + ' ' + client.general.lastName;
                return fullName.toLowerCase().includes(input);
            })
        });
    }

    render() {
        return (
            <div>
                <Input focus placeholder='Search...' onChange={this.timeOutValue} type="text" />
                <Link to={'/CreateNewUser'}>
                <Button secondary>Add User</Button>
                </Link>
                <List
                    clietsAfterSearth= {this.state.сlientsAfterShearch}
                />
            </div>
        );
    }
}

SearchList.propTypes ={
    onAddUserInfo: PropTypes.func
};

export default SearchList;