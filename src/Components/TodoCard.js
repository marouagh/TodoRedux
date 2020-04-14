import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class TodoCard extends Component {
    state={
        newInput:this.props.elt.todo

    }

    handleChangeEdit = (event) =>{
         
        this.setState({newInput :event.target.value})
    }
    handleEdit=()=>{
        
        if(this.state.newInput.trim()){
            this.props.editTodo(this.props.elt.id, this.state.newInput)
        }
        else{
            alert('write something')
        }  
    }
    render() {
        
        return (
            <div>
                    {
                       
                        <li>
                            <span className='btns'>
                            <Button className='btn' variant="outline-secondary" onClick={()=>this.props.deleteTodo(this.props.elt.id)}>Delete</Button>
                            <Button className='btn' variant="outline-secondary" onClick={()=>this.props.completeTodo(this.props.elt.id)}>{this.props.elt.isComplete && this.props.elt.isEdit? 'Undo' : 'Complete'}</Button>
                            <Button className='btn' variant="outline-secondary" onClick={() =>this.handleEdit()} >{this.props.elt.isEdit ? 'Edit' : 'Confirm'}</Button>
                            </span> 
                            {this.props.elt.isEdit ? 
                            <span style={{textDecoration:(this.props.elt.isComplete ? "line-through":"")}}>{this.props.elt.todo}</span> : 
                            <input className='edit-txt' value={this.state.newInput} onChange={this.handleChangeEdit}></input>}
                        </li>                       
                    }
            </div>
        )
    }
}