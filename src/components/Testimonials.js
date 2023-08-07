import React from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { useState } from "react";
 const Testimonials=(props)=>{
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
function leftShiftHandler(){
     if(index-1 <0 ){
        setIndex(reviews.length-1);
     }
     else{
        setIndex(index-1);
     }
}
function rightShiftHandler(){
   if(index + 1 >=reviews.length){
    setIndex(0);
   }
   else{
    setIndex(index+1);
   }

}
function surpriseHandler(){
  let randomIndex=Math.floor(Math.random()*reviews.length);
  setIndex(randomIndex); 
}
    



    return(
        <div className="w-[75vw] md:w-[600px] bg-white flex flex-col justify-center items-center mt-10 p-10  transition-all duration-700 hover:shadow-xl rounded-md ">       
                  <Card review={reviews[index]} key={reviews.id}/>
                  <div className="flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto">
        <button className="cursor-pointer hover:text-violet-500 " onClick={leftShiftHandler}>
            <FiChevronLeft/>
        </button>
      
       
        <button className="cursor-pointer hover:text-violet-500 " onClick={rightShiftHandler}>
            <FiChevronRight/>
        </button>
        </div>
       <div className="mt-6">
        <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg" onClick={surpriseHandler}>
        Surprise me
        </button>
     
        </div>
                   
               
          
        </div>
    )
 }
 export default Testimonials;