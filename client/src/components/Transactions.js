import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { TransactionDetail } from './TransactionDetail';

export const Transactions = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

   useEffect(() => {
     getTransactions();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

    return (
        
        <div>
          <h3>Historial</h3>
          <ul className="list">
              {transactions.map(transaction =>(
              (<TransactionDetail key={transaction.id} transaction={transaction}/>) //This just maps all transactions
            ))}            
          </ul>
        </div>
    )
}
