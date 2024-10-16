import React from 'react';
import { FaComments } from 'react-icons/fa';
import './ChatButton.scss';

const ChatButton = ({ onClick }) => {
  return (
    <div className="chat-button" onClick={onClick}>
      <FaComments />
    </div>
  );
};

export default ChatButton;