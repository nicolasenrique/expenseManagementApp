export default (state,action) =>{
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return{
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)// We're filtering anything that has that id
            }
            case "EDIT_TRANSACTION":
                const updatedTransaction= action.payload;
          
                const updatedTransactions = state.transactions.map((transaction) => {
                  if (transaction._id === updatedTransaction._id) {
                    return updatedTransaction;
                  }
                  return transaction;
                });
                return {
                    ...state,
                    transactions: updatedTransactions,
                  };
                    
            case 'ADD_TRANSACTION':
            return {
                ...state, //this returns the initial state (spread operator)
                transactions:[...state.transactions, action.payload]
            }    
        default:
            return state;
        
        case 'TRANSACTION_ERROR':
             return{
               ...state,
               error: action.payload
             }
    }
}

