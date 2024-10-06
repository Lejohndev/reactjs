import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';

class Detaildoctor extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/doctor/:DoctorId" component={DoctorDetail} />

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
