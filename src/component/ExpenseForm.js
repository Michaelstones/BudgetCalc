import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = (props) => {
    const {charge, amount, handleamount, handlecharge, handlesubmit,edit} =props
    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className='form-center'>
                    <div className='form-group'>
                        <label htmlFor='charge'>Charge</label>
                        <input
                        name='charge'
                        type='text'
                        className = 'form-control'
                        placeholder = 'e.g. Rent'
                        value={charge}
                        onChange={handlecharge}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='amount'>amount</label>
                        <input
                        name='amount'
                        type='number'
                        className = 'form-control'
                        placeholder = 'e.g. amount'
                        value={amount}
                        onChange={handleamount}
                        />
                    </div>
                </div>
                <button className='btn' type='submit' >
                   {edit? 'edit':'submit'}
                    <MdSend />
                </button>
            </form>  
        </>
    )
}

export default ExpenseForm
