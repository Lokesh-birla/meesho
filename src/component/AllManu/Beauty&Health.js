import { useState } from "react";
import React from "react";
import BeautyHealthData from "./AllmenuData/Beauty&HealthData";
import { useDispatch } from 'react-redux';
import { Add } from "../../servis/action/acton";
export default function  BeautyHealth(){

    const [dd,womendata]=useState(BeautyHealthData)
    const dispatch = useDispatch();

    const send = (e) =>{
      
      dispatch(Add(e))
      // console.log(e)
    }

        return(
                <>
                 <div className='container'>
                <div className='row d-flex justify-content-center '>
 {
            dd.map((element,id)=>{ 
            return (
            <div className="card p-4 m-4 ALLDATA " style={{width:'20rem'}}>
            <h>{id.id}</h>
            <img style={{height :'180px'}} src={element.image}></img>
            <div className="card-body">
            <h6 className="card-title text-black-50">{element.name}</h6> 
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
</div></div>
                </>
)}