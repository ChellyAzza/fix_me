import React from 'react'
import {useSelector} from 'react-redux'
import TasksCard from './TasksCard'



const TaskList=() => {
    const {tasks}=useSelector(state => state)

    console.log(tasks)

    return (
        <div>
            {
                tasks.map((el, i) =>
                    <TasksCard task={el} key={i} />)
            }

        </div>
    )
}

export default TaskList
