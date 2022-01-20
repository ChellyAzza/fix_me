import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addtask} from '../redux/actions'

const AddTask=() => {
    const dispatch=useDispatch()
    const [input, setInput]=useState('')

    const handelSubmit=(e) => {
        e.preventDefault();
        let newAction={
            id: Math.random(),
            action: input,
            isDone: false
        };
        dispatch(addtask(newAction))
    }



    return (
        <div className="input">
            <form onSubmit={handelSubmit}>

                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                {/* <button type='submit'>ADD</button> */}
            </form>
        </div>
    )
}

export default AddTask


