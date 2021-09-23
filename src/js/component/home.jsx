import React from "react";
import { SecondCounter } from "./SecondCounter.js";
import ReactDOM from "react-dom";

//create your first component
let number = 0;
function counter() {
	number++;
}

const Home = () => {
	console.log(number);

	return <SecondCounter number={number} />;
};

setInterval(counter(), 1000);

export default Home;

ReactDOM.render(<Home />, document.querySelector("#app"));
