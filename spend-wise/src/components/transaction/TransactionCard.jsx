import React, { useEffect, useState } from 'react'
import { Button } from '../../components'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleted, error } from '../../store/alertSlice'

const TransactionCard = ({
    title,
    amount,
    note,
    flow,
    id
}) => {

    const [color, setColor] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (flow === 'Income') setColor('green-500')
        else if (flow === 'Expense') setColor('red-500')
        else if (flow === 'Loan') setColor('orange-500')
        else if (flow === 'Investment') setColor('blue-500')
        else setColor('black')
        // console.log(color + ' ' + flow)
    }, [flow])

    const delTransaction = async (id) => {
        try {
            const del = await service.deleteTransaction(id)
            navigate('/transactions')
            if (del) {
                console.log('Transaction deleted successfully')
                dispatch(deleted())
            }
            else{
                console.log('Transaction not deleted .... try again later')
                dispatch(error())
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateTransaction = (id) => {
        navigate(`/update-transaction/id${id}`)
    }
    return (
        <div className='shadow-lg rounded-lg bg-slate-100 my-5'>
            <div className="flex">
                <div className="flex-1 p-4">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-lg text-gray-500">{note}</p>
                </div>
                <div className="flex flex-col items-end p-4">
                    <span className={`text-2xl text-${color} font-semibold`}>{amount}</span>
                    <span className="text-xl text-gray-500">{flow}</span>
                </div>
            </div>
            <div className="flex justify-between p-3">
                <div className="edit">
                    <Button onClick={()=>updateTransaction(id)} className='bg-blue-500 text-white p-2 m-2 rounded-lg min-w-16'>
                        Edit
                    </Button>
                </div>
                <div className="delete">
                    <Button onClick={()=>delTransaction(id)} className='bg-red-500 text-white p-2 m-2 rounded-lg min-w-16'>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard