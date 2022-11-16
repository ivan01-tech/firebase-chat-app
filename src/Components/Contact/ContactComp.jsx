import React, { useState } from "react";
import { ContactWrapper, Header, Name, ContactList } from "./Contact.elements";
import { Img } from "../globalStyled";
import ContactItem from "../ContactItem/ContactItem";
import { fireStore } from "../../fireBase-config";
import { useAuthContext } from "../../Context/AuthContext";
import SearchBar from "../Search/SearchBar";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";

function ContactComp() {
  const { user } = useAuthContext();
  const [usercontactList, setUserConatactList] = useState({});

  useEffect(() => {
    function getConatcList() {
      const unsub = onSnapshot(
        doc(fireStore, "userChats", user.uid),
        (doc) => {
          setUserConatactList(doc.data() || {});
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

    return user.uid && getConatcList();
  }, [user.uid]);

  return (
    <ContactWrapper>
      <Header>
        <Name>{user?.displayName}</Name>
        <Img src={user?.photoURL} width="32px" alt="" />
      </Header>

      <SearchBar />

      <ContactList>
        {Object.entries(usercontactList)
          .sort(function (a, b) {
            return b[1]?.date?.seconds - a[1]?.date?.seconds;
          })
          .map(function (doc) {
            console.log("firstdate", doc);
            return <ContactItem key={doc[0]} doc={doc} />;
          })}
      </ContactList>
    </ContactWrapper>
  );
}

export default ContactComp;
