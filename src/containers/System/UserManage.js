import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { GetAllUser } from '../../services/userServices';
class UserManage extends Component {

    state = {

    }

    async componentDidMount() {
        let response = await GetAllUser('ALL');
        console.log('get user form node.js: ', response)
    }

    /**
    life cycle
    *run compunent
    1.run construct->init state
    2.did mout(set state)
    render
    */



    render() {
        return (
            <div className="text-center">Manage users</div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
