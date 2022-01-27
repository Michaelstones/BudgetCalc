import React from 'react'
import {MdDelete, MdEdit} from 'react-icons/md'


const ExpenseItem = ({expense, handledelete,handleedit}) => {
    const {id,charges, amount} = expense
    
    return (
        <>
          <ul className='item'>
              <div className='info'>
                <span className='expense'> {charges} </span>
                <span className='amount'>${amount}</span>
              </div>
              <div>
                <button className='edit-btn' aria-label='edit button'
                onClick={()=>handleedit(id)}>
                <MdEdit/>
                </button>
                <button className='clear-btn' aria-label='delete button'
                onClick={()=>handledelete(id)}>
                <MdDelete/>
                </button>
            </div>
            </ul> 
            
        </>
    )
}

export default ExpenseItem
