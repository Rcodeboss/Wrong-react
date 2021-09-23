import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const SecondCounter = () => {
	return (
		<div className="container d-flex align-items-center bg-dark text-white">
			<div>
				<AiOutlineClockCircle size={150} />
			</div>
			<div className="textSize">0</div>
			<div className="textSize">0</div>
			<div className="textSize">0</div>
			<div className="textSize">0</div>
			<div className="textSize">0</div>
			<div className="textSize">0</div>
		</div>
	);
};
