import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class About extends Component {

    render() {

        return (
            <div className="section-specialty section-about">
                <b>About Us</b>
                <div className="content-left">
                    <iframe width="900" height="506"
                        src="https://www.youtube.com/embed/OASGscJQXp0"
                        title="BookingCare: Hệ thống đặt khám trực tuyến" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
