import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { withRouter } from 'react-router';
class HomeHeader extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            arrHomeHeader: []
        }
    }
    handleviewDetailHomeHeader = (HeaderId) => {
        this.props.history.push(`/Header/${HeaderId}`)
    }
    // handleviewDetailfin = (Id) => {
    //     this.props.history.push(`/Header/${HeaderId1}`)
    // }
    render() {
        return (
            <React.Fragment>


                <div className="Home-header-container">
                    <div className="Home-header-content">
                        <div className="Left-content">
                            <i class="fas fa-bars"></i>
                            <div className="Header-logo"></div>
                        </div>
                        <div className="Center-content">
                            <div className="child-content" onClick={() => this.handleviewDetailHomeHeader(1)}>
                                <div><b>Chuyên khoa</b></div>
                                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className="child-content" onClick={() => this.handleviewDetailHomeHeader(2)}>
                                <div><b>Cơ sở y tế</b></div>
                                <div className="subs-title">Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className="child-content" onClick={() => this.handleviewDetailHomeHeader(3)}>
                                <div><b>Bác sĩ</b></div>
                                <div className="subs-title">Chọn bác sĩ giỏi</div>
                            </div>
                            <div className="child-content" onClick={() => this.handleviewDetailHomeHeader(4)}>
                                <div><b>Gói Khám</b></div>
                                <div className="subs-title">Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className="Right-content">
                            <div className="sign-in">Đăng kí</div>
                            <div className="support"><i class="fas fa-question-circle"></i>Hỗ trợ</div>


                        </div>


                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="title1">NỀN TẢNG Ý TẾ</div>
                    <div className="title2">CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</div>
                    <div className="search"></div>
                    <div className="options"></div>
                </div>
            </React.Fragment>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
