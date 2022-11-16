import React, { useContext, useEffect, useState } from "react"
import { auth, storage } from "../fireBase-config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import { doc, ref as dbRef, setDoc } from "firebase/firestore"

import { fireStore } from "../fireBase-config"

const AuthContext = React.createContext()

export function useAuthContext() {
  return useContext(AuthContext)
}

function AuthContextProvider({ children }) {

  const [user, setUser] = useState({})
  const [progress, setProgess] = useState(0)

  const SignUp = async function (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const Login = async function (email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const UpdateUserProfile = function (data) {
    return updateProfile(auth.currentUser, data)
  }

  const uploadPhoto = async function (avatar, name) {

    const avatarRef = ref(storage, `files/${name}`)

    return uploadBytes(avatarRef, avatar)

    /*uploadtask.on("state_changed", function (snap) {
      const P = Math.floor(snap.bytesTransferred * 100 / snap.totalBytes)
      console.log(P);
      setProgess(P)
    }, function (err) {
      console.log(err)
      return
    }, async function () {
      const urlImg = await getDownloadURL(uploadtask.snapshot.ref)
      console.log(urlImg)

      setUser(function (prev) {
        return { ...prev, photoUrl: urlImg }
      })

    })*/
  }

  const writeUserData = async function (data) {
    console.log(auth.currentUser);
    const usersRef = doc(fireStore, `users/${auth.currentUser.uid}`)
    const userChatRef = doc(fireStore, `userChats/${auth.currentUser.uid}`)
    // TODO orthers user chat will be add here 
    await setDoc(userChatRef, {})
    return setDoc(usersRef, { ...data, id: auth.currentUser.uid })
  }

  const Logout = function () {
    return signOut(auth)
  }

  const value = {
    SignUp, user, writeUserData, Login, Logout, setUser, uploadPhoto, progress, UpdateUserProfile
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (U) => {
      console.log("U", U)
      setUser(U)
    })
    return unsub
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider