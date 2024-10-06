import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorIMG from "../../../assets/DoctorIMG/bs1.jpg"
import './Doctor.scss';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';
class Doctor extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            arrDoctor: []
        }
    }
    handleviewDetailDoctor = (DoctorId) => {
        this.props.history.push(`/doctor/${DoctorId}`)
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className="section-doctor">
                <div className="doctor-container">
                    <div className="doctor-header">
                        <span className="title1-section">Bác sĩ nổi bật</span>
                        <button className="btn1-section">Xem thêm</button>
                    </div>
                    <div className="doctor-body" >
                        <Slider {...settings}>
                            <div className="img1">
                                <div className="bg-img1" onClick={() => this.handleviewDetailDoctor(1)}></div>
                                <div>Giáo sư,Tiến sĩ
                                    Nguyễn Vắn Long</div>
                            </div>
                            <div className="img1">
                                <div className="bg-img2" onClick={() => this.handleviewDetailDoctor(2)}></div>
                                <div>Giáo sư,Tiến sĩ
                                    Nguyễn Vắn Long</div>
                            </div>
                            <div className="img1">
                                <div className="bg-img3" onClick={() => this.handleviewDetailDoctor(3)}></div>
                                <div>Giáo sư,Tiến sĩ
                                    Nguyễn Vắn Long</div>
                            </div>
                            <div className="img1">
                                <div className="bg-img4" onClick={() => this.handleviewDetailDoctor(4)}></div>
                                <div>Giáo sư,Tiến sĩ
                                    Nguyễn Vắn Long</div>
                            </div>
                            <div className="img1">
                                <div className="bg-img5" onClick={() => this.handleviewDetailDoctor(5)}></div>
                                <div>Giáo sư,Tiến sĩ
                                    Nguyễn Vắn Long</div>
                            </div>
                        </Slider>
                    </div>


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));
