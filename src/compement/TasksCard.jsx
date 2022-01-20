import React from 'react'
import {useDispatch} from 'react-redux'
import {deletetask, donetask} from '../redux/actions'

const TasksCard=({task}) => {
    const dispatch=useDispatch()
    console.log(task)
    return (
        <div>
            <h2 style={{textDecoration: task.done&&"line-through"}} > {task.action} </h2>
            <button onClick={() => dispatch(deletetask(task.id))} > Delete</button>
            <button onClick={() => dispatch(donetask(task.id))}   >   {task.done? "undone":"done"}   </button>
        </div>
    )
}

export default TasksCard
