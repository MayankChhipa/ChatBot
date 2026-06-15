import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingImg from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {

      const [inputText, setInputText] = useState('');

      function saveInputText(event) {
        setInputText(event.target.value);
      }

      async function sendMessage() {
        setInputText('');
        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ]

        setChatMessages([
          ...newChatMessages,

          {
            message: <img src={LoadingImg} height="30px" margin="-15px"/>,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robo',
            id: crypto.randomUUID()
          }
        ]);

      }

      function enterText(event) {

        if (event.key == "Enter") {
          sendMessage();
        }

        if (event.key == "Escape") {
          setInputText('');
        }
      }

      function clearText() {
        setChatMessages([]);
      }

      const isInputEmpty = !inputText.trim();

      return (
        <div className="chat-input-conatiner">
          <input
            placeholder="Send a message..."
            onChange={saveInputText}
            value={inputText}
            onKeyDown={enterText}
            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className="send-button"
            disabled={isInputEmpty}
          >
            →
          </button>

          <button onClick={clearText} className="clear-button" disabled={!chatMessages.length}>
            Clear
          </button>
        </div>
      );
    }