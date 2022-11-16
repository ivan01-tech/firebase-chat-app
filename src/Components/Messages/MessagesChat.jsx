import React, { useState } from "react";
import Message from "../Message/Message";
import { MessagesWrapper, EmptyChat } from "./Messages.elements";
import { useChatContext } from "../../Context/ChatContext";
import { useEffect } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { fireStore } from "../../fireBase-config";
import { useAuthContext } from "../../Context/AuthContext";

function MessagesChat() {
  const [messages, setMessages] = useState([]);
  const { userChat } = useChatContext();
  const { user } = useAuthContext();

  useEffect(() => {
    function getMessages() {
      const unsub = onSnapshot(
        doc(fireStore, "chats", userChat.chatId),
        (doc) => {
          setMessages(doc.data().messages);
        },
        (err) => {
          console.log(err);
        },
        (data) => {
          console.log("DATAS", data);
        }
      );
      return unsub;
    }

    return userChat.chatId && getMessages();
  }, [userChat.chatId]);

  return (
    <MessagesWrapper>
      {messages?.map((message, ind) => {
        console.log("message", message?.id);
        return (
          <Message
            key={messages?.id}
            message={message}
            owner={message.id.startsWith(user.uid)}
          />
        );
      })}
    </MessagesWrapper>
  );
}

export default MessagesChat;
