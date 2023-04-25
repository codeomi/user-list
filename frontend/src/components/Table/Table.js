import React,{useEffect} from 'react'
import "./Table.css"
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { listAction1 } from '../../store/action'
const Table = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  console.log(id)
  useEffect(() => {
    dispatch(listAction1(id))
  }, [dispatch,id])
  

  return (
    <div>Table</div>
  )
}

export default Table