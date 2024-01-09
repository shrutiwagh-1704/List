import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import {addNewTodo} from '../redux/actions';


function Input() {
    const[text,setText]=useState("");
    const dispatch=useDispatch();
    
    const onFormSubmit=(e)=>{
      e.preventDefault();
      console.log("form is submitted");
      console.log("Text",text);
      dispatch(addNewTodo(text));

    }

    const onInputChange=(e)=>
    {
        setText(e.target.value);
    }

  return (
    <form className="input" onSubmit={onFormSubmit} >
        <input className="inputbox" 
        placeholder='Enter new task here '
        
        onChange={onInputChange}
        
        value={text}
        />
    </form>
  )
}

export default Input;

