//Redux example

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//agrego las actions
import { increment, decrement, login, logout } from '../redux_actions';

const Counter = () => {
	//con useSelector tengo acceso al state global de redux, son los REDUCERS que combiné en el rootReducer (osea en el index.js de la carpeta reducers)
	const counter = useSelector(state => state.counter);
	const logged = useSelector(state => state.logged);

	//para USAR las acciones uso el dispatch, esto vincula la ACTION con los REDUCERS
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Count: {counter} </h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<br />
			<button onClick={() => dispatch(increment(10))}>+10</button>
			<button onClick={() => dispatch(decrement(10))}>-10</button>
			{logged ? (
				<h4>You logged in succesfully</h4>
			) : (
				<h4>Log in please</h4>
			)}
			<button onClick={() => dispatch(login())}>
				{!logged ? 'LOGIN' : 'LOGOUT'}
			</button>
		</div>
	);
};

export default Counter;
