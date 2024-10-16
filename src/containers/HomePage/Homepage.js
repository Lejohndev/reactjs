import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './section/Specialty';
import Doctor from './section/Doctor';
import About from './section/About'

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Specialty />
                <Doctor />
                <About />

                <div style={{ height: '' }}></div>
            </div>

        );
    }

}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
