import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const EditTransaction = ({ transaction }) => {
    const { editTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <div>
            {transaction.text}<span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={()=>deleteTransaction(transaction._id)} className="delete-btn">Edit</button>
        </div>
        
    )
}