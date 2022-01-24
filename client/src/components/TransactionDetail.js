import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TransactionDetail = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <div>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </div>
    )
}
