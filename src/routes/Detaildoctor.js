import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import DetailDoctor from '../containers/patiant/Doctor/DetailDoctor';
class Detaildoctor extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>


                    </Switch>
                </div>
            </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detaildoctor);
