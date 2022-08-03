import React from "react";
import { useState } from "react";
import "../App.css"
function Aa(){
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
        <p id="Para">Type of Car</p>  
      <p id="para2"><label for="cars" id="cars">Car: <select name="cars" id="cars">
  <option  value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</label>

{/*  */}

    
</p>
     
    </div>
    {/* <button id="BtnNxt" >suhduh</button> */}
       </div>
       </div>
       </div>
  )
}
export default Aa
