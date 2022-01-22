import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { TransactionDetail } from './TransactionDetail';

export const Transactions = () => {
    const { transactions } = useContext(GlobalContext);

   

    return (
        
        <div>
          <h3>Historial</h3>
          <ul className="list">
              {transactions.map(transaction =>(
              (<TransactionDetail key={transaction.id} transaction={transaction}/>)
            ))}            
          </ul>
        </div>
    )
}
