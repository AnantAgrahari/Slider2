import React from "react";
import reviews from "./data.js";
import Testimonials from "./components/Testimonials.js"
const App=()=>{
   return(
    <div>
     <div>
      <h1>Our Testimonials</h1>
     
     <div></div>
     <Testimonials reviews={reviews}/>
    </div>
    </div>
   );
};

export default App;
