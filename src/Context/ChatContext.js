import React, { createContext, useContext } from "react";
import { useReducer } from "react";

export const ACTIONS_TYPES = {
  changeUser: "CHANGE_USER"
}
const ChatContext = createContext({});

export function useChatContext() {
  return useContext(ChatContext);
}

const chatReducer = function (state, action) {

  // const combineId =
  //   action.payload.uid > action.payload.userId
  //     ? action.payload.uid + action.payload.userId
  //     : action.payload.userId + action.payload.uid
  switch (action.type) {
    case ACTIONS_TYPES.changeUser:
      return { ...action.payload }
    default: return state
  }

}
const initialState = {
  chatId: "",
  data: {}
}
function ChatContextProvider({ children }) {

  const [userChat, dispatch] = useReducer(chatReducer, initialState)
  const value = { userChat, dispatch };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export default ChatContextProvider;
