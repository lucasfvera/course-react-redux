import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import '../App.css';

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return (
		<div className='Navbar'>
			<h4>NavBar</h4>
			<span className='element'>Number of movies: {movies.length}</span>
		</div>
	);
};

export default Nav;
