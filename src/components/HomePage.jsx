import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatInput } from './ChatInput';
import { Navbar } from './Navbar';
import { ChatMessages } from './ChatMessages';
import { Chatbot } from 'supersimpledev';

export function HomePage() {
  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');

    if (savedMessages) {
      return JSON.parse(savedMessages);
    }

    return [];
  });

  useEffect(() => {
    const messagesToSave = chatMessages.filter((chatMessage) => {
      return typeof chatMessage.message === 'string';
    });

    localStorage.setItem('messages', JSON.stringify(messagesToSave));
  }, [chatMessages]);

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: 'Goodbye. Have a great day!',
      'give me a unique id': function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('chatbotUser');
    navigate('/');
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div className="app-container">
        {chatMessages.length === 0 && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>
        )}

        <ChatMessages chatMessages={chatMessages} />

        <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
      </div>
    </>
  );
}