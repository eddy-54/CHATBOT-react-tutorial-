import RobotProfileImage from '../robot.png'
import UserProfileImage from '../user.png'
import './ChatMessage.css'


function ChatMessage({ message, sender, time }) {
  ;
        //   const {message, sender}=props
        // ______________________________________________________________
        //         if (sender === "robot") {
        //           return (
        //             <div>
        //               <img src="robot.png" width="50" />
        //               {message}
        //             </div>
        //           );
        //         } else {
        //           return (
        //             <div>
        //               {message}
        //               <img src="user.png" width="50" />
        //             </div>
        //           );
        //         }
        //____________________________________________________________________
        // return (
        //   <div>
        //     {sender === "robot" && <img src="robot.png" width="50" />}
        //     {message}
        //     <img src="user.png" width="50" />
        //   </div>)
        //_________________________________________________________________
        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {sender === "robot" && (
              <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}<p>{time}</p></div>
            {sender === "user" && (
              <img src={UserProfileImage} className="chat-message-profile" />
            )}
          </div>
        );
      }
      console.log(UserProfileImage)

      export default ChatMessage