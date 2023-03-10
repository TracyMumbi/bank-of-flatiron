import React, {useState, useEffect} from 'react'
import NewTransactions from '../components/NewTransactions'
import TransactionList from '../components/TransactionList'

function Home() {
  // create a state to hold the data and also for the search function

    const [isTransactions, setIsTransactions] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    
    useEffect(() => {
      // fetching the data and making the fetch to be able to search
      fetch(`http://localhost:8001/transactions?q=${searchQuery}`)
      .then (response => response.json())
      .then(isTransactions => setIsTransactions(isTransactions))
    }, [searchQuery])

    // this handles the search and targets the value
    function handleSearch (e) {
      setSearchQuery(e.target.value)
    }
    // console.log(isTransactions);

  return (
    <div class = "body">
    <div className = "navbar">
    <h1 style={{color: "rebeccapurple"}}>Welcome to your trusted bank of FlatIron</h1 >
        <input id = 'input' type="text" placeholder='Search Here...' onChange={handleSearch}/>
        <button id = 'searchButton'>Search</button>
      </div>       
        <NewTransactions isTransactions={isTransactions} setIsTransactions={setIsTransactions}/>
        <TransactionList allTransactions={isTransactions}/>
    </div>
  )
}

export default Home