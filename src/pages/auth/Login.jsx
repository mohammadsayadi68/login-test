import React from "react";
import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const [pass, setPass] = useState("");
  const onChange = (e) => {
    const input = e.currentTarget;

    if (input.name == "user") {
      setUserName(input.value);
    } else {
      setPass(input.value);
    }
  };

  const handelLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem("storeUser")) {
      const [loginUser] = JSON.parse(localStorage.getItem("storeUser"));

      if (userName === loginUser.user && pass === loginUser.pass) {
        toast("you are logined success!!!!!");
    return navigate("/");

      } else {
        toast.error("oppps your user or pass is wrong!!!!");
      }
    } else {
      toast.error(" user not found !!!!!1");

    }
  };
  return (
    <section>
      <ToastContainer />
      <form onSubmit={handelLogin} className="mt-5">
        <div className="mt-3">
          <Input name="user" type="text" value={userName} onChange={onChange} />
          <Input name="pass" type="password" value={pass} onChange={onChange} />
        </div>

        <Button type="submit" value="login" />
      </form>
    </section>
  );
}

export default Login;
