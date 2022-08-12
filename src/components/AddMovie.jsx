import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
	const [movies, setMovies] = useContext(MovieContext);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const updateName = e => setName(e.target.value);
	const updatePrice = e => setPrice(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		setMovies(previousMovies => [
			...previousMovies,
			{ name, price, id: [movies.length] },
		]);
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='name'
				required
				value={name}
				onChange={updateName}
			/>
			<input
				type='text'
				name='price'
				required
				value={price}
				onChange={updatePrice}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddMovie;
