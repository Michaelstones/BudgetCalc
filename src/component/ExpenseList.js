import React from 'react'
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses,handledelete,handleedit, clearitems}) => {
    return (
        <>
            <ul className='list'>
                {expenses.map((expense)=>{
                    return <Item key={expense.id} expense ={expense}
                    handledelete={handledelete}
                    handleedit={handleedit}/>
                })}
            </ul>
            {expenses.length > 0 && (
            <button className='btn' onClick={clearitems}>clear Expenses
            <MdDelete className='btn-icon'/>
            </button>)}
        </>
    )
}

export default ExpenseList
