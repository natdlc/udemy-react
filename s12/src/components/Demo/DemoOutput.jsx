import React from "react";

const DemoOutput = (props) => {
  console.log("APP RUNNING");
	return <p>{props.show && "This is new"}</p>;
  // return <p>just an item</p>
};

export default DemoOutput;
