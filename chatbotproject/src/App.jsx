import { useEffect, useState } from "react";
import ChatInput from "./assets/components/ChatInput";
import ChatMessagess from "./assets/components/ChatMessagess";
import { chatbot } from "supersimpledev";
import dayjs from "dayjs";

import "./App.css";

function App() {
  const time = dayjs().valueOf();
  const readableTime = dayjs(time).format("h:mm A");
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [
      {
        message: "Hello chatbot",
        sender: "user",
        key: "id1",
        time: readableTime,
      },
      {
        message: "Helloo, how can I help you",
        sender: "robot",
        key: "id2",
        time: readableTime,
      },
      {
        message: "Can you get me today's date?",
        sender: "user",
        key: "id3",
        time: readableTime,
      },
    ],
  );
  useEffect(() => {
    chatbot.addResponses({
      name: "Supersimpledev Chatbot",
      striker: "Victor Osimhen",
      create: "Ezenwukwa Ebubechukwu",
      beautiful: "Eno-Obong",
      return: "Go to our office at behind flat",
      refund: "Contact the customer care - juniamrefund@gmail.com"
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessagess
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
export default App;
