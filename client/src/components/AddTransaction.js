import React , {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () =>{

    const[text, setText] = useState(''); //Here I set the initial state for this const
    const [amount, setAmount] = useState(); //Here I set the initial state for this const

    const{ addTransaction } = useContext(GlobalContext);

    const onSubmit = e =>   {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), //rounding the number
            text,
            amount: +amount //turns it to a number not a string
        }
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Agregar transacción</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Texto</label><br/>
                    <input type="text" value={text} onChange ={(e) => setText(e.target.value)} placeholder="Escriba su texto..."/>
                </div>
                <div className="form-control">
                <label htmlFor="amount">Monto (negativo - gasto, positivo - ingreso)</label><br/>
                <input type="number" value={amount} onChange ={(e) => setAmount(e.target.value)}  placeholder="Ingrese un monto"/>
                </div>
                <button className="btn">Agregar Transacción</button>
            </form>
        </div>
    )
}
