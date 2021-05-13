import React from 'react';

const Task = (props) => {
    const {task, index, list, setList} = props;

    const onClick = () =>{
        setList(() =>{
            return list.filter(task => list.indexOf(task) !== index)
        });
    }
    const onChange = () =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return(
        <div className="container mt-3 border border-success p-3">
            <div>
                <h4>{task.name}</h4>
                <input type="checkbox" onChange={onChange} checked={task.isComplete}/>
                <label className="m-1">Completed?</label>
                <input onClick={onClick} type="submit" value="Delete" className="btn btn-outline-danger btn-sm m-3"/>
            </div>
        </div>
    )
}

export default Task;