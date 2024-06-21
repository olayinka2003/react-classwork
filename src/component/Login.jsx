import React from "react";
import { useState } from "react";

export const Login = ({
  heading,
  type,
  placeholder,
  eholder,
  pholder,
  color,
  email,
  password,
}) => {
  const [name, value] = useState("");

  function handleChange(e) {
    value(e.target.value);
  }
  return (
    <div>
      <h1 style={{ color: color }}>{heading}</h1>
      {heading === "Sign-up" ? (
        <>
          <input
            type={type}
            placeholder={placeholder}
            value={name}
            onChange={handleChange}
          />
          <br />
          <input type={email} placeholder={eholder}  />
          <br />
          <input type={password} placeholder={pholder}  />
          <br /> 
          <button>Sign up</button>
        </>
      ) : (
        <>
          <input type={type} placeholder={placeholder}  />
          <br />
          <input type={password} placeholder={pholder} />
          <br />
          <button>Login</button>
        </>
      )}
    </div>
  );
};
