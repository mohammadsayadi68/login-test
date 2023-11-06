import React from "react";
import Link from "../link";
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="d-flex justify-content-between list-unstyled mt-2">
          <li className="list-style-none">
            <Link href="/" value="Home" />
          </li>
          <li>
            <Link href="/tasks" value="tasks" />
          </li>
          <li>
            <Link href="/login" value="Login" />
          </li>
          <li>
            <Link href="/register" value="Register" />
          </li>
          <li>
            <Link href="/logout" value="LogOut" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
