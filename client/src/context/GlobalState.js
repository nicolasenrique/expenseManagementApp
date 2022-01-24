import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions:[], //initial state, no transactions.
    error:null,
    loading: true
}
export const GlobalContext = createContext(initialState);
//Context provides a way to pass data through components without passing this data manually.

// This wrap (provides) other components as children.
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); //useReducer takes 2 values (reducer & initialState)

    //Here's where I can add actions (delete, create, edit, etc.)
    async function getTransactions() {
        try {
        const res = await axios.get('/api/v1/transactions/')

        dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data   
        });
     } catch (err){
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload:err.response.data.error
        })
     }
    }

    async function deleteTransaction(id){
        try  {
          await axios.delete(`/api/v1/transactions/${id}`)

          dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
            })

        } catch (err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload:err.response.data.error
            });
        }  
    }

    function editTransaction(id){
        dispatch({
            type:'EDIT_TRANSACTION',
            payload:id
            })
    }

    async function addTransaction(transaction){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type:'ADD_TRANSACTION',
                payload: res.data.data
                });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload:err.response.data.error
            });
        }

       
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        error:state.error,
        loading:state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        editTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

    }