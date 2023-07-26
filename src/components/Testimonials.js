import React from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
 const Testimonials=(props)=>{
    let reviews=props.reviews;
    return(
        <div>       
                  <Card review={reviews[0]} key={reviews.id}/>
                  <div>
        <button>
            <FiChevronLeft/>
        </button>
       </div>
       <div>
        <button>
            <FiChevronRight/>
        </button>
       </div>
       <div>
        <button>

        </button>
        Surprise me
        </div>
                   
               
          
        </div>
    )
 }
 export default Testimonials;