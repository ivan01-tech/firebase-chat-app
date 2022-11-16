import React, { useState } from "react";
import { secondaryColor } from "../../utils/colors";
import { Img, Input } from "../globalStyled";
import { auth, fireStore } from "../../fireBase-config";
import {
  query,
  getDocs,
  collection,
  getDoc,
  doc,
  where,
  setDoc,
  updateDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import {
  SearchBarWrapper,
  SearchList,
  InputSearch,
  SearchListItem,
} from "./Searchbar.elements";
import { useAuthContext } from "../../Context/AuthContext";

function SearchBar() {
  const [labelSearch, setLabelSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [err, setErr] = useState("");

  const { user: currentUser } = useAuthContext();

  const fetchUser = async function () {
    if (labelSearch) {
      const usersRefs = collection(fireStore, "users");
      const q = query(usersRefs, where("displayName", "==", labelSearch));

      try {
        setErr("");
        const userList = await getDocs(q);
        setSearchList(userList.docs.map((doc) => doc.data()));
      } catch (err) {
        setErr("Something went wrong !");
      } finally {
        setLabelSearch("");
      }
    }
  };

  const handleSelect = async function (userId) {
    console.log(userId);
    const combineId =
      userId > currentUser.uid
        ? userId + currentUser.uid
        : currentUser.uid + userId;

    try {
      const chats = await getDoc(doc(fireStore, "chats", combineId));

      if (chats.exists()) {
        console.log(chats.data(), "dta chat");
      } else {
        console.log("entrons");
        if (userId === auth.currentUser.uid) return;

        await setDoc(doc(fireStore, "chats", combineId), { messages: [] });

        const user = searchList.slice().find((user) => user.id === userId);
        await updateDoc(doc(fireStore, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: { ...user, id: userId },
          [combineId + ".date"]: serverTimestamp(),
          [combineId + ".lastMessaage"]: {},
        });

        await updateDoc(doc(fireStore, "userChats", user.id), {
          [combineId + ".userInfo"]: {
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
            id: currentUser.uid,
          },
          [combineId + ".date"]: serverTimestamp(),
          [combineId + ".lastMessaage"]: {},
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSearchList([]);
    }
  };

  const handleSearch = function (e) {
    e.code === "Enter" && fetchUser();
  };

  return (
    <SearchBarWrapper fullheight={searchList.length > 0 ? true : false}>
      <InputSearch
        fullheight={searchList.length > 0 ? true : false}
        color={"#" + secondaryColor}
        onChange={(e) => setLabelSearch(e.target.value)}
        value={labelSearch}
        placeholder="Find a user"
        onKeyDown={handleSearch}
      />

      {searchList.length > 0 && (
        <SearchList>
          {searchList.length === 0 && <p>No Users Found</p>}
          {err && <p>{err}</p>}
          {searchList.slice().map(function (elt, ind) {
            console.log("elt", elt);
            return (
              <SearchListItem key={ind} onClick={() => handleSelect(elt.id)}>
                <Img width={"40px"} src={elt.photoURL} alt="" />
                <h5>{elt.displayName.substring(0, 8)}</h5>
              </SearchListItem>
            );
          })}
        </SearchList>
      )}
    </SearchBarWrapper>
  );
}

export default SearchBar;
