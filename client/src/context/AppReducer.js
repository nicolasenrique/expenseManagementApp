export default (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)// We're filtering anything that has that id
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, //this returns the initial state (spread operator)
                transactions:[action.payload, ...state.transactions]
            }    
        default:
            return state;
    }
}