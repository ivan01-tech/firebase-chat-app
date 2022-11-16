import {
  ChatWrapper,
  Header,
  Tools,
  FooterForm,
  InputForm,
  FooterTools,
  ButtonFooterTools,
} from "./Chats.elements";
import { v5, v4 } from "uuid";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { useChatContext } from "../../Context/ChatContext";
import MessagesChat from "../Messages/MessagesChat";
import { useState } from "react";
import { Input, Label } from "../globalStyled";
import { useRef } from "react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { fireStore, storage } from "../../fireBase-config";
import { useAuthContext } from "../../Context/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function ChatMessagesWrapper() {
  const [text, setText] = useState("");
  const [Progess, setProgress] = useState(0);
  // const [urlImg, setUrlImg] = useState(null);
  const imgRef = useRef(null);

  const { userChat } = useChatContext();
  const { user } = useAuthContext();

  const handleSubmit = async function (e) {
    e.preventDefault();
    const imageBlob = imgRef?.current?.files[0];
    console.log(imageBlob);

    if (!text && !imageBlob) return;

    if (text && !imageBlob) {
      try {
        const refDoc = doc(fireStore, "chats", userChat.chatId);
        await updateDoc(refDoc, {
          messages: arrayUnion({
            text,
            photoUrl: null,
            id: `${user.uid}${v4()}`,
            date: Timestamp.now(),
          }),
        });

        await updateDoc(doc(fireStore, "userChats", userChat.userInfo.id), {
          [userChat.chatId + ".lastMessaage"]: { text, photoUrl: null },
          [userChat.chatId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(fireStore, "userChats", user.uid), {
          [userChat.chatId + ".lastMessaage"]: { text, photoUrl: null },
          [userChat.chatId + ".date"]: serverTimestamp(),
        });
      } catch (err) {
        console.log("error", err);
      } finally {
        setText("");
        imgRef.current.value = null;
      }
    } else if (imageBlob && !text) {
      const filesRef = ref(storage, `files/${imageBlob.name + user.chatId}`);
      const uploadtask = uploadBytesResumable(filesRef, imageBlob);

      uploadtask.on(
        "state_changed",
        function (snap) {
          const P = Math.floor((snap.bytesTransferred * 100) / snap.totalBytes);
          console.log(P);
          setProgress(P);
        },
        function (err) {
          console.log(err);
        },
        async function () {
          const img = await getDownloadURL(uploadtask.snapshot.ref);

          const refDoc = doc(fireStore, "chats", userChat.chatId);
          try {
            await updateDoc(refDoc, {
              messages: arrayUnion({
                text,
                photoUrl: img,
                id: `${user.uid}${v4()}`,
                date: Timestamp.now(),
              }),
            });
            console.log("id", userChat.userInfo.id);
            await updateDoc(doc(fireStore, "userChats", userChat.userInfo.id), {
              [userChat.chatId + ".lastMessaage"]: { text, photoUrl: img },
              [userChat.chatId + ".date"]: serverTimestamp(),
            });
            await updateDoc(doc(fireStore, "userChats", user.uid), {
              [userChat.chatId + ".lastMessaage"]: { text, photoUrl: img },
              [userChat.chatId + ".date"]: serverTimestamp(),
            });
            console.log(img);
          } catch (err) {
            console.log(err);
          } finally {
            setText("");
            imgRef.current.value = null;
          }
        }
      );
    } else {
      const filesRef = ref(storage, `files/${imageBlob.name + user.chatId}`);
      const uploadtask = uploadBytesResumable(filesRef, imageBlob);

      uploadtask.on(
        "state_changed",
        function (snap) {
          const P = Math.floor((snap.bytesTransferred * 100) / snap.totalBytes);
          console.log(P);
          setProgress(P);
        },
        function (err) {
          console.log(err);
        },
        async function () {
          const img = await getDownloadURL(uploadtask.snapshot.ref);

          const refDoc = doc(fireStore, "chats", userChat.chatId);
          try {
            await updateDoc(refDoc, {
              messages: arrayUnion({
                text,
                photoUrl: img,
                id: `${user.uid}${v4()}`,
                date: Timestamp.now(),
              }),
            });

            await updateDoc(doc(fireStore, "userChats", userChat.userInfo.id), {
              [userChat.chatId + ".lastMessaage"]: { text, photoUrl: img },
              [userChat.chatId + ".date"]: serverTimestamp(),
            });

            await updateDoc(doc(fireStore, "userChats", user.uid), {
              [userChat.chatId + ".lastMessaage"]: { text, photoUrl: img },
              [userChat.chatId + ".date"]: serverTimestamp(),
            });

            console.log(img);
          } catch (err) {
            console.log(err);
          } finally {
            setText("");
            imgRef.current.value = null;
          }
        }
      );
    }
  };

  return (
    <ChatWrapper>
      <Header>
        <h5>{userChat?.userInfo?.displayName}</h5>
        <Tools>
          <BsCameraVideoFill />
          <FiUserPlus />
          <BsThreeDots />
        </Tools>
      </Header>

      <MessagesChat />

      <FooterForm onSubmit={handleSubmit}>
        <InputForm
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write something..."
        />
        <FooterTools>
          <Label htmlFor="image">
            <BiImageAdd className="icons" />
          </Label>
          <Input
            type="file"
            style={{
              display: "none",
            }}
            ref={imgRef}
            id="image"
          />
          <ButtonFooterTools>Send</ButtonFooterTools>
        </FooterTools>
      </FooterForm>
    </ChatWrapper>
  );
}

export default ChatMessagesWrapper;
