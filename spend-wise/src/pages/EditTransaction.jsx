import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { TransactionForm } from '../components'

const EditTransaction = () => {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    const transId = slug.toString().slice(2)
    const userId = useSelector(state => state.auth.userData)


    useEffect(()=>{
        if(slug){
            console.log(slug)
            console.log(transId)
            service.getTransaction(transId).then(response => {
                if(response){
                    // console.log(response)
                    setPost(response)
                } else {
                    console.log('fetch failed')
                    navigate('/transactions')
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }, [slug])
    // console.log(post)
  return (
    <div>
        <TransactionForm post={post} />
    </div>
  )
}

export default EditTransaction