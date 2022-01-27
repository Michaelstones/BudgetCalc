import React from 'react'

const ExpenseAlert = ({type,text}) => {
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    )
}

export default ExpenseAlert
