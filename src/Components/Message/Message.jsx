import React, { useEffect, useRef } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useChatContext } from "../../Context/ChatContext";
import { Img } from "../globalStyled";

import {
  MessageWrapper,
  MessageInfo,
  TextContent,
  Text,
  ImgContent,
} from "./Message.elements";

function Message({ owner, message }) {
  const { user } = useAuthContext();
  const { userChat } = useChatContext();
  const refMes = useRef();
  const imgURL = owner ? user.photoURL : userChat.userInfo.photoURL;

  useEffect(
    function () {
      refMes.current.scrollIntoView({ behavior: "smooth" });
    },
    [message]
  );

  if (!message.text && !message.photoUrl) return;

  return (
    <MessageWrapper ref={refMes} owner={owner}>
      <MessageInfo>
        <Img width={"32px"} src={imgURL} />
        <span>just now</span>
      </MessageInfo>
      <TextContent owner={owner}>
        {message.text && <Text owner={owner}>{message.text}</Text>}
        {message.photoUrl && (
          <ImgContent owner={owner} src={message.photoUrl} />
        )}
      </TextContent>
    </MessageWrapper>
  );
}

export default Message;
