import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Abouts from "./about/Abouts";
import { Toaster } from "react-hot-toast"; //
import { useAuth } from "./context/AuthProvider"; //


function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/course" element={<Courses />} /> */}

        <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />

      </Routes>
      <Toaster />
    </>
  );
}

export default App;
