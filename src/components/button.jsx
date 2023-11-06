import React from "react";

const Button = (props) => {
  const{ value, type,className ,action}=props
  return (
    <button className={className} type={type} onClick={action}>{value}</button>
  );
};
Button.defaultProps = {
  type: "button",
  value:"send",
  className:'btn btn-success',
  action:'default'

};
export default Button;
