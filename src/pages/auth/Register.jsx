import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const schema = yup.object().shape({
    name: yup.string("نام حرف باشد").required("نام الزامی است"),
    lastName: yup
      .string("نام خانوادگی حرف باشد")
      .required("نام خانوادگی الزامی است"),
    user: yup.string("نام کاربری حرف باشد").required("نام کاربری الزامی است"),
    pass: yup
      .string("پسورد حرف باشد")
      .required("پسورد الزامی است")
      .min(4, "پسورد باید حداقل 4 کاراکتر باشد"),
  });

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    const input = e.currentTarget;
    switch (input.name) {
      case "name":
        setName(input.value);
        break;
      case "lastName":
        setLastName(input.value);
        break;
      case "user":
        setUser(input.value);
        break;
      case "pass":
        setPass(input.value);
        break;
    }
  };
  const users = { name, lastName, user, pass };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const result = await validate();
    if (result) {
      try {
        if (!localStorage.getItem("user")) {
          const storeUser = [];
          storeUser.push(users);
          localStorage.setItem("user", JSON.stringify(storeUser));
          setName('');setPass('');setUser('');setLastName('');

        } else {
          const storeUser = JSON.parse(localStorage.getItem("user"));
          const filter = storeUser.filter((user) => user.user == users.user);
          setName('');setPass('');setUser('');setLastName('');
          if (filter.length) {
            toast.error("نام کاربری تگراری است");
          } else {
            storeUser.push(users);
            localStorage.setItem("user" , JSON.stringify(storeUser));
          }
        }
      } catch (error) {
        setErrors(["(خطای سمت سرور)"]);
      }
    }
  };

  const validate = async () => {
    try {
      const result = await schema.validate(
        { name, lastName, user, pass },
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
    <div>
      <ToastContainer />
      <form onSubmit={handelSubmit} className="mt-5">
        <Input name="name" type="text" value={name} onChange={onChange} />
        <Input
          name="lastName"
          type="text"
          value={lastName}
          onChange={onChange}
        />
        <Input name="user" type="text" value={user} onChange={onChange} />
        <Input name="pass" type="password" value={pass} onChange={onChange} />
        <Button type="submit" value="register" />
      </form>
    </div>
  );
}

export default Register;
