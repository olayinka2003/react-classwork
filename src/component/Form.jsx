import React from "react";
import { Login } from "./Login";

function Form() {
  return (
    <div>
      <Login
        color="green"
        heading="Sign-up"
        type="text"
        placeholder="enter your username"
        email="email"
        eholder="enter your email"
        password="password"
        pholder="enter your password"
      />
      <Login
        color="blue"
        heading="Sign-in"
        type="text"
        placeholder="enter your username"
        email="email"
        eholder="enter your email"
        password="password"
        pholder="enter your password"
      />
    </div>
  );
}

export default Form;
