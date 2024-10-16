import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ChatBox.scss';

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>Chat với chúng tôi</h3>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="chat-content">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Nhập tin nhắn..."
          />
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;