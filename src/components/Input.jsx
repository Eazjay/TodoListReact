import React from 'react';

const Input = (props) =>{
    const {list, setList} = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    }
    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
        task = "";
    }
    return(
        <div className="container mt-5 p-5">
            <input type="text" name="task" onChange={onChange}/>
            <button className="btn btn-primary btn-block m-3" onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input;