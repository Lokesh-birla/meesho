import { useState } from "react";
import React from "react";
import WomenEthnicData from "./AllmenuData/WomenEthnicData";
import { useDispatch } from 'react-redux';
import { Add } from "../../servis/action/acton";
export default function  WomenEthnic(){

    const [dd,womendata]=useState(WomenEthnicData)
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
            <div className="card p-4 m-4 ALLDATA " style={{width:'18rem'}}>
            <h>{id.id}</h>
            <img style={{height :'220px'}} src={element.image}></img>
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