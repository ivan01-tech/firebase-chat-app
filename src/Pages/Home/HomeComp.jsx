import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { HomeWrapper, Home } from "./Home.elements";
import ContactComp from "../../Components/Contact/ContactComp";
import ChatMessagesWrapper from "../../Components/Chats/ChatMessages";
import { useChatContext } from "../../Context/ChatContext";
import { EmptyChat } from "../../Components/Messages/Messages.elements";

function HomeComp() {
  const { user } = useAuthContext();
  const { userChat } = useChatContext();
  console.log("user", userChat);
  return (
    <Home>
      <HomeWrapper>
        <ContactComp />

        {userChat.chatId ? (
          <ChatMessagesWrapper />
        ) : (
          <EmptyChat>
            <h4>Choose A chat Message...</h4>
            <p>Or search a user by typping his name in the search bar</p>
          </EmptyChat>
        )}
      </HomeWrapper>
    </Home>
  );
}

export default HomeComp;
