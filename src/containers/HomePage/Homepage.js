import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './section/Specialty';
import Doctor from './section/Doctor';
import About from './section/About';
import ChatButton from './ChatButton';
import ChatBox from './ChatBox';

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <HomeHeader />
      <Specialty />
      <Doctor />
      <About />
      <ChatButton onClick={toggleChat} />
      {isChatOpen && <ChatBox onClose={toggleChat} />}
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