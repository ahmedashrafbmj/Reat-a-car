import React from "react";
import { useState } from "react";
import "../App.css"
function Bb(){
    const [count, setCount] = useState(0);

  return(
    
    <div id="main" style={{height:"100vh", backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/0/0b/Mountains_%26_Clouds.jpg")`, width:"93.8%", margin:"10px auto" }}>
   
       <div id="nav">
        <ul id="nav1">Muntazim</ul>
        <div id="nav2">
        <ul>About us</ul>
        <ul>Contact Us</ul>
        <ul>Trips</ul>
       </div>
       </div>
              {/* box  */}
       <div id="box">
        <div id="boxsub">
           
        <div id="count">
        <p id="Para">Number of travelers</p>  
      <p id="para2">  <button id="countBtn" onClick={() => setCount(count - 1)}>
       -
      </button> {count}     <button id="countBtn2" onClick={() => setCount(count + 1)}>
       +
      </button></p>
     
    </div>
       </div>
       </div>
       </div>
  )
}
export default Bb
