import React from 'react'
import { useNavigate } from 'react-router-dom'

const BudgetCard = ({text, amount, colour}) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/transactions')
  }

  return (
    <div className='w-1/2 p-5' onClick={goTo}>
        <div className='bg-slate-50 shadow-lg rounded-lg px-5 hover:shadow-2xl cursor-pointer flex flex-col items-center gap-7 py-10'>
            <h1 className='text-xl font-semibold'>Total {text}</h1>
            <h1 className={`text-3xl font-bold text-${colour}-500`}>{amount}</h1>
          </div>
    </div>
  )
}

export default BudgetCard