import React, { useEffect, useState } from 'react'
import '../styles/Footer.css';
import CardData from './CardData';
import {Add} from '../servis/action/acton'
import { useDispatch } from 'react-redux';
const Card = () => {
const [data,usedata]=useState(CardData);

const dispatch = useDispatch();

const send = (e) =>{
  
  dispatch(Add(e))
  // console.log(e)
}
const [users,setUser]=useState([])
const getuser = async ()=>{
  const response = await fetch('https://fakestoreapi.com/products');
  setUser ( await response.json());
  // console.log(data)
}
useEffect(()=>{
  getuser();
})
 return(
<>

 <div className='container'>
 <div className='row d-flex justify-content-center '>


{
   users.map((element,id)=>{ 
     return (
 <div className="card p-4 m-4  " style={{width:'18rem'}}>
    <h>{id.id}</h>
    <img style={{height :'160px'}} src={element.image}></img>
  <div className="card-body">
  <h6 className="card-title" overflow='hidden'>{element.title}</h6>   
  <h4 className="card-title">{element.price} $</h4>
    {/* <p className="card-text">{element.description}₹ </p> */}
    <button className="btn btn-primary"
    onClick={()=> send(element)}
    >Add to Card</button>
  </div>
</div>
)
})
}
{
  data.map((element,id)=>{ 
   return (
<div className="card p-4 m-4 ALLDATA " style={{width:'20rem'}}>
   <h>{id.id}</h>
   <img style={{height :'200px'}} src={element.image}></img>
 <div className="card-body">
 <h5 className="card-title">{element.name}</h5>   
 <h5 className="card-title">{element.price} ₹</h5>
   <p className="card-text"></p>
   <button className="btn btn-primary"
   onClick={()=> send(element)}
   >Add to Card</button>
 </div>
</div>
)
})
}
</div>
</div>

</>
)
}

  

export default Card;