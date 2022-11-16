import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import {
  Input,
  Form,
  Label,
  Button,
  Redirect,
} from "../../Components/globalStyled";
import {
  FromGroIn,
  SignInContainer,
  SignInHeader,
  SignInWrapper,
  Error,
} from "./SignIn.elements";

function SignIn() {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const { Login } = useAuthContext();
  const navigate = useNavigate();

  const emailRef = useRef();
  const pwRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (pwRef.current.value.length < 6) {
      setError("Mininum 6 characters !");
      setIsError(true);
      return;
    }

    try {
      setIsError(false);
      const data = await Login(emailRef.current.value, pwRef.current.value);
      console.log(data);
      navigate("/", { replace: true });
    } catch (err) {
      setIsError(true);
      setError("Failed to log in");
      console.log(err);
    } finally {
      emailRef.current.value = "";
      pwRef.current.value = "";
    }
  };

  return (
    <SignInContainer>
      <SignInWrapper>
        <SignInHeader>
          <h1>Chat App</h1>
          <p>Login</p>
        </SignInHeader>

        {isError && <Error>{error}</Error>}

        <Form onSubmit={submitHandler}>
          <Input
            ref={emailRef}
            placeholder="Your Email"
            type={"email"}
            name="email"
          />
          <Input
            ref={pwRef}
            type="password"
            name="password"
            placeholder="Your password"
          />
          <Button> Log In</Button>
        </Form>
        <Redirect>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Redirect>
      </SignInWrapper>
    </SignInContainer>
  );
}

export default SignIn;
