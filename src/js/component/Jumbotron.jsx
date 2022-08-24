import React from "react";

export const Jumbotron = (props) => {
	return (
		<div className="jumbotron mx-4 p-5 bg-light">
			<h1 className="display-4">A warm Welcome!</h1>
			<p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ab accusantium libero aliquam distinctio odit sed ratione quaerat voluptate obcaecati, deleniti in voluptatum molestias similique ea provident nam eum repellat.</p>
			<a className="btn btn-primary btn-lg" href="www.google.com" role="button">
				Call to action!
			</a>
		</div>
	);
};