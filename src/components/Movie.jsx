import React from "react";

const Movie = ({ name, price }) => {
	return (
		<div>
			<h3>{name.toUpperCase()}</h3>
			<p>{price}</p>
		</div>
	);
};

export default Movie;
