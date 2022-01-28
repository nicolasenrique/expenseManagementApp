const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions, editTransactions } = require('../controllers/transactionsController')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

router
    .route('/:id')
    .put(editTransactions);

module.exports = router;