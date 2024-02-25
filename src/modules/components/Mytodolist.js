import React from 'react';
import { MdDeleteSweep } from "react-icons/md";

 function Mytodolist(props){

    return (
      <ul>
      <li>{props.item}
       <span> <MdDeleteSweep className='del-icon' onClick={(e) => {props.deleteitem(props.index)}}/></span>
      </li>
      </ul>
    )
} 
  

export default Mytodolist;
