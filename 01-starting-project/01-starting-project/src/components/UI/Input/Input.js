import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`
      ${props.isValid === false ? classes.invalid : ""} 
      ${classes.control}
      `}
		>
			<label htmlFor={props.htmlFor}>{props.labelText}</label>
			<input
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
};

export default Input;
