import React from "react";
import Input from "./input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  const changeVal = (e) => {
    const input = e.currentTarget;
    const newUser = { ...user };
    newUser[input.name] = input.value;
    setUser(newUser);
  };
const saveUser=[];
const storeUser=[...saveUser,user]
  const handelSubmit = (e) => {
    e.preventDefault();        
    localStorage.setItem("storeUser", JSON.stringify(storeUser));
    return navigate("/");
  };
  return (
    <div>
      <form onSubmit={handelSubmit} className="mt-5">
        <div className="mt-3">
          <label>name</label>
          <Input
            name="name"
            type="text"
            value={user.name}
            onChange={changeVal}
          />
          <label>L-name</label>
          <Input
            name="lastName"
            type="text"
            value={user.lastName}
            onChange={changeVal}
          />
          <label>user</label>
          <Input
            name="user"
            type="text"
            value={user.user}
            onChange={changeVal}
          />
          <label>pass</label>
          <Input
            name="pass"
            type="password"
            value={user.pass}
            onChange={changeVal}
          />
        </div>
        <Input
            name="btn"
            type="submit"
            value='register'
            className="btn btn-primary mt-3"
          />
      </form>
    </div>
  );
}

export default Register;
