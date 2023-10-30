import React from "react";

const Button = (props) => {
  const{ value, type }=props
  return (
    <section className="mt-3">
    <button className="btn btn-success" type={type}>{value}</button>
    </section>
  );
};
Button.defaultProps = {
  type: "button",
  value:"send"
};
export default Button;
