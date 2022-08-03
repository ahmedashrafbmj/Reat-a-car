import React from "react";
import { useState } from "react";
import "../App.css"
function Dd(){
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
        <p id="Para">Driver</p>  
      <p id="para2">< input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">Yes</label>    <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">No</label></p>
     
    </div>
       </div>
       </div>
       </div>
  )
}
export default Dd
