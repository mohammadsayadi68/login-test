import React from "react";

const Input = (props) => {
  const { name, value, onChange, type }=props
  return (
    <section className="mt-3">
      <legend>{name}</legend>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="form-control mt-4"
      />
    </section>
  );
};
export default Input;
