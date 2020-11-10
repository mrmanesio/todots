import React from "react";
import './ToDoItem.scss';



const ToDoItem = (props:any) => {
  const resolvedClass = {
    textDecoration: 'line-through'
  }
  return (
    <li className='todo__item' key={props.key}>
      <input type="checkbox" defaultChecked={props.completed} onChange={props.handleChange} />
      <span className='todo__des'
        style = {props.completed?resolvedClass : {}}
      >{props.text}</span>
    </li>
  )
}

export default ToDoItem;