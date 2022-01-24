import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount) //map all transactions
    
    const income = amounts
    .filter(item => item >0) // filter positive amounts
    .reduce((acc,item) =>(acc += item), 0) //reduce them to one value
    .toFixed(2); // only 2 decimals

    const expense = (
        amounts.filter(item => item <0).reduce((acc,item) =>(acc += item), 0)*-1
    ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Ingresos</h4>
                <p className="money-plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Egresos</h4>
                <p className="money-minus">${numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}
