import { useState, useEffect } from 'react';
import RobotProfileImage from '../assets/robo_icon.png';
import UserProfileImage from '../assets/person_icon.png';
import './ChatMessage.css';
import  dayjs  from 'dayjs';

    
    export function ChatMessage({ message, sender }) {

      // // const message = props.message;
      // // const sender = props.sender;
      // const { message, sender } = props;

      /*if(sender == "robo_icon") {
        return (
          <div>
            <img src = "robo_icon.png" width = "50" />
            {message}
          </div>
        )
      }*/

      const [time, setTime] = useState(dayjs().format('h:mma'));

      useEffect(() => {

        const timerId = setInterval(() => {
          setTime(dayjs().format('h:mma'))
        }, 1000);

        return () => clearInterval(timerId);
      }, [])

      return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robo'}>
          {sender === 'robo' && (
            <img src={RobotProfileImage} className="chat-message-profile" />
          )}

          <div className="chat-message-text">
            {message}
            <p className="chatmessage-time">{time}</p>
          </div>

          {sender === 'user' && (
            <img src={UserProfileImage}className="chat-message-profile" />
          )}

        </div>
      )
    }