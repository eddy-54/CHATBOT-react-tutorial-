import {useEffect, useRef} from 'react'
import ChatMessage from './ChatMessage';
import './ChatMessagess.css'

function ChatMessagess({ chatMessages }) {
        const chatMessagesRef = useRef(null);
        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);
        return (
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.key}
                  time={chatMessage.time}
                />
              );
            })}
          </div>
        );
      }
      

      export default ChatMessagess