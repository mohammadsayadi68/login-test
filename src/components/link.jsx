import React from "react";
import { Link } from "react-router-dom";
const Links = ({ value, href, className }) => {
  return (
    <Link className={className} to={href}>
      {value}
    </Link>
  );
};
Links.defaultProps = {
  value: "home",
  href: "/",
  className: "nav-link",
};
export default Links;
