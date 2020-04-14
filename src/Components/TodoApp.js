import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTask, deleteTask, completeTask, editTask} from './actions/actions'
import TodoCard from './TodoCard'

class TodoApp extends Component {

    state={
        myInput:""   
    }
    
    handleChange=(event)=>{
        this.setState({
            myInput:event.target.value
            
        }) 
    }
    handleAdd=(event)=>{
        event.preventDefault();
        if(this.state.myInput.trim()){
            this.setState({myInput:""})
            this.props.addTask({todo:this.state.myInput, id:Math.random(), isComplete: false, isEdit:true})
        }
        else{
            alert('write something')
        }  
    }
    render() {
        const {el} =this.props
        return (
            <div>
                <div className="part1">
                <h1>To-Do App!</h1><br/>
                <h5>Add New To-Do</h5>
                <form >
                    <input className="txt_input" placeholder="Enter New task" size="100" value={this.state.myInput} onChange={this.handleChange}></input>
                    <button className="add_btn" type='submit' onClick={this.handleAdd}>Add</button>
                </form>
                </div>
                <div className="part2">
                    
                <h2>Lest's get some work done!</h2>
                <ul className="u_list">
                
                    {
                        this.props.listTodo.map(el =>
                        <TodoCard key={el.id} 
                        elt={el}
                        deleteTodo={this.props.deleteTask}
                        completeTodo={this.props.completeTask}
                        editTodo={this.props.editTask}/>
                        )
                    }
                </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return { listTodo : state }
}
const mapDispatchToProps = dispatch =>{
    return {addTask : (payload)=> dispatch(addTask(payload)),
            deleteTask : (payload)=> dispatch(deleteTask(payload)),
            completeTask : (payload)=> dispatch(completeTask(payload)),
            editTask : (payload, newTask)=> dispatch(editTask(payload, newTask))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(TodoApp)