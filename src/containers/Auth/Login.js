import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';

import { handleLoginApi } from '../../services/userServices';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            arrMessage: ''
        }
    }
    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })

    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login succeeds')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })

                }
            }
            console.log('e.message', error.response);
            // this.setState({
            //     errMessage: e.message
            // })
        }

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword

        })
        console.log(this.state.isShowPassword)
    }

    render() {
        return (
            <div className="Login-Background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" className="form-control"
                                placeholder="Enter your username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnchangeUsername(event)}
                            />

                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custum-input-password">
                                <input
                                    className="form-control"
                                    type={this.state.isShowPassword ? 'text' : 'Password'}
                                    placeholder="Enter your Password"
                                    onChange={(event) => { this.handleOnchangePassword(event) }}
                                />
                                <span onClick={() => { this.handleShowHidePassword() }}
                                >
                                    <i class={this.state.isShowPassword ? "far fa-eye" : 'fas fa-eye-slash'}></i>

                                </span>

                            </div>

                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12 ">
                            <button className="btn-login"
                                onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <div className="text-other-center">Or login with:</div>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login); export const path = {
    HOME: '/',
    HOMEPAGE: /'home'/,
    LOGIN: '/login',
    LOG_OUT: '/logout',
    SYSTEM: '/system'
};

