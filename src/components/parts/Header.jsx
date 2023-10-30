import React from "react";
import Link from "../link";
const Header = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link href="/" value="Home" />
          </li>
          <li>
            <Link href="/login" value="Login" />
          </li>
          <li>
            <Link href="/logout" value="LogOut" />
          </li>
          <li>
            <Link href="/register" value="Register" />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
