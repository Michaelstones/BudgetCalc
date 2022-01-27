import './App.css';
import React, { useState, useEffect } from 'react';
import Alert from './component/ExpenseAlert'
import Form from './component/ExpenseForm'
import List from './component/ExpenseList'
import { v4 as uuidv4 } from 'uuid';
 
// const initial =[
//   {id:uuidv4(), charges: 'rent', amount:1600},
//   {id:uuidv4(), charges: 'car', amount:400},
//   {id:uuidv4(), charges: 'others', amount:1200},
// ]
const initial = (localStorage.getItem('expense')?
 localStorage.getItem('expense'):[])

function App() {
  // ************ useState**************
  const [expenses, setExpense] = useState(initial)
  const [ charges, setCharges] = useState('')
  const [ amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  const [id, setId]  = useState(0)
  const [edit, setEdit] = useState(false)
  // *********** FUNCTIONLITY ************
//  useEffect Hooks
useEffect(() => {
  localStorage.setItem('expenses', JSON.stringify(expenses))
  
}, [expenses])
  // handle charge func space
  const handlecharge = (e) =>{
    const element1 = e.target.value
    setCharges(element1)
  }
  // handle amount func space
  const handleamount = (e) =>{
    const element2 = e.target.value
    setAmount(element2)
  }
  // handle alert func space
  const handlealert = ({type, text}) =>{
    setAlert({show:true, type:type, text:text})
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }

  // handle submit func space
  const handlesubmit = (e) =>{
    e.preventDefault()
    if(charges !== '' && amount > 0){
      if(edit){
        let itemz = expenses.map((item)=>{
          return item.id === id? {...item, charges:charges,amount:amount}:item
        })

        setExpense(itemz)
        setEdit(false)
        handlealert({type:'success', text:'Item Edited'})

      }
      else{
        const singleItem = {id: uuidv4(), charges:charges, amount: amount}
        setExpense([...expenses, singleItem])
        handlealert({type:'success', text:'Item Added'})
      }
      
      setCharges('')
      setAmount('')
    }
    
    
    
    else{
      // console.log(empty);
      handlealert({type:'danger', text:'amount must be bigger than zero and charge cannot be empty'})
    };
  };

  // handle clearbtn
  const clearitems = () =>{
    setExpense([])
    handlealert({type:'danger', text:'all items cleared'})
  }
  // handle delete
  const handledelete = (id)=>{
    let delItem = expenses.filter((item) =>{
      return item.id !== id
    })
    setExpense(delItem)
    handlealert({type:'danger', text:'items deleted'})

  }
  // handle edited
  const handleedit = (id)=>{
    let items =expenses.find((item)=>{
      // console.log('hi');
      return item.id === id
    })
    const {charges, amount}= items
    setCharges(charges)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }
  
  // end
  return (
    <>
    <h1>Budget calculator</h1>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <Alert/>
    <main className='App'>
    <Form 
    charge={charges}
     handlecharge={handlecharge}
     amount = {amount}
     handleamount={handleamount}
     handlesubmit={handlesubmit}
     edit={edit}
    />
    <List expenses ={expenses} clearitems={clearitems}
    handledelete={handledelete} 
    handleedit={handleedit}
    />
    </main>
    <h1>
      Total spending : {''} <span className='total'> 
     ${''} {expenses.reduce((arr, curr)=>{
        return (arr += parseInt(curr.amount))
     }, 0)}
      </span>
    </h1>

    </>
  );
}

export default App;
