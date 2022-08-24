import React from "react";

export const Card = () => {
	return (
		<div className="card m-3 mt-4 text-center">
			<img className="card-img-top" src="https://picsum.photos/180/100
				" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card Title</h5>
				<p className="card-text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel dicta corporis qui sequi magni. 
				</p>
				<a href="www.google.com" className="btn btn-primary pt-2">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
