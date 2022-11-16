import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { auth } from "../../fireBase-config";
import {
  Input,
  Label,
  Form,
  Img,
  Button,
  Redirect,
} from "../../Components/globalStyled";
import img from "../../assets/download.png";

import {
  SignUpContainer,
  SignUpHeader,
  SignUpWrapper,
  Error,
} from "./SignUp.elements";
import { getDownloadURL } from "firebase/storage";

function SignUpForm() {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  // const [photoURL, setphotoURL] = useState("");
  const {
    SignUp,
    uploadPhoto,
    progress,
    UpdateUserProfile,
    writeUserData,
    user,
  } = useAuthContext();
  const navigate = useNavigate();

  const inputs = useRef([]);
  const emailRef = useRef();
  const cfRef = useRef();
  const pwRef = useRef();

  const addRef = (elt) => {
    if (!inputs.current.includes(elt)) {
      inputs.current.push(elt);
      return;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(inputs.current[1].files[0], "inputs");

    if (pwRef.current.value.length < 6) {
      setError("Mininum 6 characters !");
      setIsError(true);
      return;
    }

    if (pwRef.current.value !== cfRef.current.value) {
      setError("Password does not match !");
      setIsError(true);
      return;
    }

    SignUp(emailRef.current.value, cfRef.current.value)
      .then(function (result) {
        console.log("result", result);
        return uploadPhoto(inputs.current[1].files[0], inputs.current[0].value);
      })
      .then(function (result) {
        console.log("result1", result);
        return getDownloadURL(result.ref);
      })
      .then(async function (url) {
        console.log("result2", url);
        await UpdateUserProfile({
          displayName: inputs.current[0].value,
          photoURL: url,
        });

        console.log("user1", user);

        const DATA = {
          displayName: inputs.current[0].value,
          email: emailRef.current.value,
          photoURL: url,
        };
        return writeUserData(DATA);
      })
      .then(function (data) {
        console.log("write", data);

        // emailRef.current.value = "";
        // cfRef.current.value = "";
        // pwRef.current.value = "";
        navigate("/", { replace: true });
      })
      .catch(function (err) {
        setIsError(true);
        setError("Failed to sign in");
        console.dir(err);
      });
  };

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SignUpHeader>
          <h1>Chat App</h1>
          <p>Register</p>
        </SignUpHeader>

        {isError && <Error>{error}</Error>}

        <Form onSubmit={submitHandler}>
          <Input placeholder="Name " ref={addRef} type={"type"} name="name" />

          <Input
            placeholder="Your email here"
            ref={emailRef}
            type={"email"}
            name="email"
          />

          <Input
            placeholder="Your password"
            ref={pwRef}
            type="password"
            name="password"
          />

          <Input
            ref={cfRef}
            type="password"
            placeholder="Confirm your password"
            name="confirm"
          />

          <Input
            ref={addRef}
            type="file"
            style={{ display: "none" }}
            placeholder="Confirm your password"
            name="confirm"
            id="file"
          />

          <Label htmlFor="file">
            <Img src={img} alt="avatar" width={"32px"} />
            <span>choose an avatar</span>
            {progress > 0 && progress}
          </Label>

          <Button> Sign In</Button>
        </Form>
        <Redirect>
          Already have an account? <Link to="/login">Sign In</Link>
        </Redirect>
      </SignUpWrapper>
    </SignUpContainer>
  );
}

export default SignUpForm;
