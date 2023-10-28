import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./input";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  const changeVal = (e) => {
    const input = e.currentTarget;
    const newUser = { ...user };
    newUser[input.name] = input.value;
    setUser(newUser);
  };

  const handelLogin = (e) => {
    e.preventDefault();
    // console.log(user);
    var loginUser=localStorage.getItem("storeUser");
    loginUser=JSON.parse(loginUser);
    const [usertest]=loginUser;
    if (usertest.user===user.user&&usertest.pass===user.pass ) {
      console.log('you login is success');
    }else{
      console.log('user or pass is wrang');
    }
  };
  return (
    <div>
      <form onSubmit={handelLogin} className="mt-5">
        <div className="mt-3">
      
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

export default Login;
