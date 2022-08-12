import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
	const [movies, setMovies] = useState([
		{
			name: "hp",
			price: 10,
			id: 0,
		},
		{
			name: "got",
			price: 10,
			id: 1,
		},
		{
			name: "barbie",
			price: 10,
			id: 2,
		},
	]);

	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{/*Adentro tendría q poner todos los componentes q quiero q accedan a estos states*/}
			{/* <Nav />
            <MovieList /> */}
			{props.children}
			{/*pero con props.children puedo decirle q cuando llame a este componente, todos sus hijos van acá adentro */}
		</MovieContext.Provider>
	);
};
