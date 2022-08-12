import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { MovieProvider } from './components/MovieContext';
import Counter from './components/Counter';

//REDUX IMPORTS
import { createStore } from 'redux';
import rootReducer from './redux_reducers';
import { Provider } from 'react-redux';

//acá conecto todas las cosas de redux, creo la store con los reducers q están combinados en el root
const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
	return (
		<Provider store={store}>
			<MovieProvider>
				{/*Al envolver todo con este comp, todos los states de MovieProvider van a ser accesibles para sus children */}
				<div className='App'>
					<Nav className='Navbar' />
					<AddMovie />
					<MovieList />
					<Counter />
				</div>
			</MovieProvider>
		</Provider>
	);
}

export default App;
