import React, {useState} from 'react'
import './Form.css';


 export const Form = () => {
  const [input,setInput]=useState("");
  const [get,setGet]=useState([]);

  const addItem=()=>{
    if(!input){
      alert("Enter new item")
      return;
    }
    const item={
      id: Math.floor(Math.random() * 1000),
      value:input
    };
    setGet(oldList=>[...oldList,item]);
    setInput("");
  }
  

  const remove=(id)=>{
    const Fix= get.filter((item)=>item.id !==id);
        setGet(Fix);
  }

  
  return (
    <div className='input-1'>
      <div className='Text'>
      <input type="text" 
      placeholder="write you wish"
      value={input}
      className='input-2'
      onChange={e=> setInput(e.target.value)}/>
      <button onClick={()=>addItem()} className='Btn'>click</button>
      </div>
      <ul>
        {get.map(item =>{
          return(
            <div className='group'>
          <li key={item.id}>{item.value} <button className='remove' onClick={()=>remove(item.id)}>Delete</button></li>
          </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Form;
