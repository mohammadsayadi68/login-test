import React from "react";

const Input = (props) => {
  const{ value, type }=props
  return (
    <section className="mt-3">
    <button className="btn btn-success" type={type}>{value}</button>
    </section>
  );
};
export default Input;
