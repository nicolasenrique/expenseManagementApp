import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const TransactionDetail = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <div>
            {transaction.text}<span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={()=>deleteTransaction(transaction._id)} className="delete-btn">X</button>
        </div>
        
    )
}
