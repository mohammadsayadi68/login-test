import React from "react";
import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    userName: yup
      .string("نام کاربری حرف باشد")
      .required("نام کاربری الزامی است"),
    pass: yup
      .string("پسورد حرف باشد")
      .required("پسورد الزامی است")
      .min(4, "حداقل 4 کاراکترباشد پسورد"),
  });

  const onChange = (e) => {
    const input = e.currentTarget;

    if (input.name == "user") {
      setUserName(input.value);
    } else {
      setPass(input.value);
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    const result = await validate();
    if (result) {
      try {
        if (localStorage.getItem("user")) {
          const loginUser = JSON.parse(localStorage.getItem("user")).filter(
            (user) => user.user == userName && user.pass == pass
          );;
          if (loginUser.length) {
            const [auth]=loginUser
            localStorage.setItem("authUser", JSON.stringify(auth));
            setUserName('');setPass('');

            toast("you are logined success!!!!!");
            return navigate("/");
          } else {
            toast.error("نام کاربری یارمز عبور اشتباه است");
          }
        }else{
          toast.error("!!!!!کاربری با این مشحصات پیدا نشد");

        }
      } catch (error) {}
    }
  };
  const validate = async () => {
    try {
      const result = await schema.validate(
        { userName, pass },
        { abortEarly: false }
      );
      return result;
    } catch (error) {
      setErrors(error.errors);
    }
  };
  if (errors.length > 0) {
    errors.map((e) => toast.error(e));
    setErrors("");
  }
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
