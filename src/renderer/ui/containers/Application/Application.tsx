import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import ApplicationStyle from './ApplicationStyle';
import ToDoItem from "../../components/block/ToDoItem/ToDoItem";

import todoData from "../../../../todoData";
import AddToDo from "../../components/block/AddToDo/AddToDo";


class Application extends Component<any, any>{

  state = {
    toDoItems: todoData
  }

  handleChange = (id:number) => {
    const index:any = this.state.toDoItems.map((item:any) => item.id).indexOf(id);
    this.setState( (state:any) => {
      const {toDoItems} = state;
      toDoItems[index].completed = true;
      return toDoItems;
    })
  }

  render(){
    const todoItems = this.state.toDoItems;

    const activeTasks = todoItems.filter(task => !task.completed);
    const completedTasks = todoItems.filter(task => task.completed);

    const finalTasks = [...activeTasks, ...completedTasks].map((item:any) => {
      return (
        <ToDoItem
          key={item.id}
          text={item.description}
          completed={item.completed}
          handleChange={() => { this.handleChange(item.id) }}
        />
      )
    })


    return (
      <>
        <div className="App">
          <h1>Список делишек</h1>
          <AddToDo />
          <ul>
            {finalTasks}
          </ul>
        </div>
      </>
    )
  }
}

export default withStyles(ApplicationStyle, {
  name: 'Application'
})(Application);

