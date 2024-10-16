import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyIMG from "../../../assets/specialtyIMG/xuong khop.jpg";
class Specialty extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            arrSpecialty: []
        }
    }
    handleviewDetailSpecialty = (SpecialtyId) => {
        this.props.history.push(`/specialty/${SpecialtyId}`)
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        };
        return (
            <div className="section-specialty">
                <div className="specialty-container">
                    <div className="specialty-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="specialty-body">
                        <Slider {...settings}>
                            <div className="img">
                                <div className="bg-img" onClick={() => this.handleviewDetailSpecialty(1)}></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img">
                                <div className="bg-img" onClick={() => this.handleviewDetailSpecialty(2)}></div>
                                <div>Nhi khoa</div>
                            </div>
                            <div className="img">
                                <div className="bg-img" onClick={() => this.handleviewDetailSpecialty(3)}></div>
                                <div>tim mạch</div>
                            </div>
                            <div className="img">
                                <div className="bg-img" onClick={() => this.handleviewDetailSpecialty(4)}></div>
                                <div>tiêu hóa</div>
                            </div>
                            <div className="img">
                                <div className="bg-img" onClick={() => this.handleviewDetailSpecialty(5)}></div>
                                <div>Thần kinh</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
