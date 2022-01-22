import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        // { id:1, text: 'Coca Cola', amount:-10},
        // { id:2, text: 'Chocolate', amount:-20},
        // { id:3, text: 'Proyecto Freelance', amount:100},
        // { id:4, text: 'Comic', amount:-5}
    ]
}
export const GlobalContext = createContext(initialState);
//Context provides a way to pass data through components without passing this data manually.

// This wrap (provides) other components as children.
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Here's where I can add actions (delete, create, edit, etc.)
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
            })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
            })
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

    }