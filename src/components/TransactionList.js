import React, { useState } from 'react'
import Transactions from './Transactions'

function TransactionList({allTransactions, newTransactionLIst}) {


  const mappedTransactions = allTransactions.map((oneTransaction) => {
    return (
      <Transactions 
      key={oneTransaction.id} 
      date={oneTransaction.date}
      description={oneTransaction.description}
      category={oneTransaction.category}
      amount={oneTransaction.amount} />
    )
  })
  //console.log(allTransactions)

  return (
    <>
      <table>
      <thead>
          <tr className="table-header">
            <th className="date">Date</th>
            <th className="description">Description</th>
            <th className="category">Category</th>
            <th className="amount">Amount</th>
            <th className='button'>Button</th>
          </tr>
        </thead>
        <tbody>
        {mappedTransactions}
        </tbody>
      </table>
    </>
  )
}

export default TransactionList