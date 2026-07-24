import { useState } from "react";
import {chatbot} from "supersimpledev"
import './ChatInput.css'
import dayjs from "dayjs";

function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");
        // const [isLoading, setIsLoading] = useState(false);
        function saveInputText(event) {
          setInputText(event.target.value);
        }
        const time = dayjs().valueOf();
        const readableTime = dayjs(time).format("h:mm A")
        async function sendMessage() {
          if (inputText == "") {
            // setIsLoading(true);
            return;
          }
          // setIsLoading("true")
          const newChatMessage = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              key: crypto.randomUUID(),
              time: readableTime
              
            },
            // {
            //   message: "loading..",
            //   sender: "robot",
            //   key: crypto.randomUUID(),
            // },
          ];
          setChatMessages(newChatMessage);
          setInputText("");
          // setChatMessages([
          //   ...chatMessages,
          //   { messsage: "loading..", sender: "robot", key: crypto.randomUUID },
          // ]);
          setChatMessages([
            ...newChatMessage,
            {
              message: "loading..",
              sender: "robot",
              key: crypto.randomUUID(),
              
            },
          ]);

          const response = await chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessage,

            {
              message: response ,
              sender: "robot",
              key: crypto.randomUUID(),
              time: readableTime
            },
          ]);
          // setIsLoading("false")
        }
        return (
          <div className="chat-input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
            />
            <button
              className="send-button"
              onClick={sendMessage}
            //   disabled={isLoading}
            >
              Send
            </button>
          </div>
        );
      }

      export default ChatInput