import React, {useState} from 'react'
import Transactions from './Transactions'

function NewTransactions() {

    const [isNewTransactions, setNewTransactions] = useState([])
    const [id, setId] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")


    function handleId (event) {
        setId(event.target.value)
    }


    function handleDate (event) {
        setDate(event.target.value)
    }

    function handleDescription (event) {
        setDescription(event.target.value)
    }

    function handleCategory (event) {
        setCategory(event.target.value)
    }

    function handleAmount (event) {
        setAmount(event.target.value)
    }

    function handleTransactions () {
            const newTransaction = {
                id: id,
                date: date,
                description: description,
                category: category,
                amount: amount

            }
    //const newArray =[...isNewTransactions,newTransaction]
    setNewTransactions([...isNewTransactions,newTransaction])
    setId("")
    setDate("")
    setDescription("")
    setCategory("")
    setAmount("")
   // console.log(newArray)
         }

    const newTransactionLIst = isNewTransactions.map((oneTransactionLIst)=>{
            return (<Transactions 
            key={oneTransactionLIst.id}
                date={oneTransactionLIst.date}
                description={oneTransactionLIst.description}
                category={oneTransactionLIst.category}
                amount={oneTransactionLIst.amount}
            />
            )
        })

       // console.log(newTransactionLIst)

  return (
    <form id = "new">
        <input type="number" onChange={handleId} value={id} />
        <input id = "inputtransaction" type="date" onChange={handleDate} value={date} />
        <input id = "inputtransaction" type="text" placeholder='Description' onChange={handleDescription} value={description}/>
        <input id="type" onChange = {handleCategory} value={category}/>
        <input id = "inputtransaction" type="number" placeholder='Amount' onChange={handleAmount} value={amount} />
        <button id = "newtransactions" onClick = {handleTransactions}>New Transaction</button>
        <div>{newTransactionLIst}</div>
    </form>
  )
}

export default NewTransactions