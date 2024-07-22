import React from "react";
import Card from "../component/Card.jsx";
import Planets from "../component/planets.jsx";
import Vehicles from "../component/Vehicles.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="mt-5 ms-5" id="middletittles">

		<h1 id="tituloscolor">Characters </h1>
		<div className="d-flex">
			<Card />
			
		</div>
		<h1 >Planets</h1>
		<div className="d-flex">
           <Planets/>
		 
		</div>
		<h1 >Vehicles</h1>
		<div className="d-flex">
           <Vehicles/>
		 
		</div>
	</div>
);
