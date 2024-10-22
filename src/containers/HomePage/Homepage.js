import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './section/Specialty';
import Doctor from './section/Doctor';
import About from './section/About';
import ChatBox from './ChatBox';
const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <Specialty />
      <Doctor />
      <About />
      <ChatBox/>
      <div style={{ height: '' }}></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);