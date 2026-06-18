import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import { Navbar } from './components/Navbar';
import './App.css'
import { ChatMessages } from './components/ChatMessages';
import { Chatbot } from 'supersimpledev'

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');

    if (savedMessages) {
      return JSON.parse(savedMessages);
    }

    return [];
  })

      // const [chatMessages, setChatMessages]  = array
      // // const chatMessages = array[0];
      // // const setChatMessages = array[1]; //updater Function

      useEffect(() => {
        const messagesToSave = chatMessages.filter((chatMessage) => {
          return typeof chatMessage.message === 'string';
        });

        localStorage.setItem('messages', JSON.stringify(messagesToSave))
      }, [chatMessages])

      useEffect(() => {
        Chatbot.addResponses({
         'goodbye': 'Goodbye. Have a great day!',
         'give me a unique id': function() {
            return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
          }
        })
      })


      return (
        <>
          <Navbar />

          <div className="app-container">
            
            {chatMessages.length === 0 && (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}


            <ChatMessages
              chatMessages={chatMessages}
            />

            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        </>
      );

}

export default App
