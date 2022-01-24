const Transaction = require('../models/Transactions')

//This get all transactions
// GET api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
    try{
    const transactions = await Transaction.find();

    return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
    })
    } catch(err) {
    return res.send(500).json({
    success: false,
    error: 'Server Error'
    })
    }
} 

//This add a transaction
// POST api/v1/transactions
// Public
exports.addTransactions = async (req, res, next) => {
    res.send('POST transaction');
} 

//This delete a transaction
// DELET api/v1/transactions/:id
// Public
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transaction');
} 