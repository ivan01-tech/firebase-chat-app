import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { ACTIONS_TYPES, useChatContext } from "../../Context/ChatContext";
import { Img } from "../globalStyled";
import { ContactItemWrapper, Info } from "./ContactItem.elements";
import { BsImage } from "react-icons/bs";

function ContactItem({ doc }) {
  const { dispatch, userChat } = useChatContext();
  const { user: currentUser } = useAuthContext();

  const handleSelectChat = function () {
    console.log("doc", doc[1]);
    doc &&
      dispatch({
        type: ACTIONS_TYPES.changeUser,
        payload: {
          chatId: doc[0],
          userInfo: doc[1].userInfo,
        },
      });
  };

  return (
    <ContactItemWrapper onClick={handleSelectChat}>
      <Img width={"40px"} src={doc[1]?.userInfo?.photoURL} alt="" />
      <Info>
        <h5>{doc[1]?.userInfo?.displayName}</h5>
        {doc[1]?.lastMessaage.text ? (
          <span>{doc[1]?.lastMessaage.text.substring(0, 7)}...</span>
        ) : doc[1]?.lastMessaage.photoUrl ? (
          <BsImage />
        ) : null}
      </Info>
    </ContactItemWrapper>
  );
}

export default ContactItem;
