import {createStore} from 'redux'

//STORE -> GLOBAL STATE



//ACTIONS
    //acá declaro todas las posibles acciones dentro de objetos
    //son funciones q devuelven objetos con el tipo de accion
const increment = ()=>{
    return {
        type: 'INCREMENT' //este es el nombre de la acción
    };
};

const decrement = ()=>{
    return {
        type: 'DECREMENT' //este es el nombre de la acción
    };
};

//REDUCERS
    //acá pongo la funcion q va a activarse de acuerdo al nombre de ACTION q le pase
    //va a mirar q accion fue pasada al DISPATCH
const counter = (state=0,action) => {
    switch (action.type) { //mira el type de la action q le paso y lo compara con los valores para ver QUE ejecuta
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
    };
};

let store = createStore(counter);

//Display in the console
store.suscribe(()=>console.log(store.getState()));


//DISPATCH
    //acá ejecuto esas acciones q creé
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());