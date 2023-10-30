import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const onChange = (e) => {

    const input = e.currentTarget;
    switch (input.name) {
      case 'name':
        setName(input.value);
        break;
      case  'lastName':
        setLastName(input.value);
        break;
      case 'user':
        setUser(input.value);
        break;
      case 'pass':
        setPass(input.value);
        break;
    }
  };
  const storeUser = [{name,lastName, user,pass}];
  const handelSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("storeUser", JSON.stringify(storeUser));
    return navigate("/");
  };
  return (
    <div>
      <form onSubmit={handelSubmit} className="mt-5">
        <Input name="name" type="text" value={user.name} onChange={onChange} />
        <Input
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={onChange}
        />
        <Input name="user" type="text" value={user.user} onChange={onChange} />
        <Input
          name="pass"
          type="password"
          value={user.pass}
          onChange={onChange}
        />
        <Button type="submit" value="register" />
      </form>
    </div>
  );
}

export default Register;
