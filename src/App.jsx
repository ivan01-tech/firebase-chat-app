import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComp from "./Pages/Home/HomeComp";
import SignIn from "./Pages/Login/LoginForm";
import SignUpForm from "./Pages/SignUp/SignUpForm";
import RequiredAuth from "../src/Components/Auth/RequiredAuth";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<RequiredAuth />}>
          <Route path="/" element={<HomeComp />} />
        </Route>

        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
