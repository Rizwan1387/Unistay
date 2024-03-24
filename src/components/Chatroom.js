import React, { useState } from 'react';

const Chatroom = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Handle message submission (to be implemented)
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div>
      <h2>Chatroom</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatroom;
