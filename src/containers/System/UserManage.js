import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { GetAllUser } from '../../services/userServices';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        let response = await GetAllUser('ALL');
        if (response && response.errCode == 0) {
            this.setState({
                arrUsers: response.users
            }, () => {
                console.log('check state user 1', this.state.arrUsers);
            })
            console.log('checkstate user 1', this.state.arrUsers);

        }
    }

    /**
    life cycle
    *run compunent
    1.run construct->init state
    2.did mout(set state)
    render
    */



    render() {
        console.log('check render', this.state)
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
