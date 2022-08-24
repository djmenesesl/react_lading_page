import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {

	const cards = [1, 2, 3, 4]

	return (
	    <div className="container-fluid px-0">
		 	<Navbar />
			<Jumbotron />
			 
		 	<div className="d-flex flex-wrap justify-content-between ms-2 me-2">
		 		{
					cards.map((number, index) => {
						return <Card key={index}  />

					}) 
				}
		  	</div>
			<Footer />
		</div>
	);
};

export default Home;
