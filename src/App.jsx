import React from "react";
import './App.css';
import Media from "react-media";

function App(){
    
    return(
        <div id="container2" >	
		{/* <div id="navbar">
			<span >FREE SHIPPIN FOR ORDERS $50+ </span>
			<span >ORDER NOW TO GET 20% DISCOUNT</span>
			<span >ORDER NOW TO GET 20% DISCOUNT</span>
		</div> */}
		<Media query="(min-width:800px)">
			{matches=>(
				matches?
				<div id="navbar">
			<span >FREE SHIPPIN FOR ORDERS $50+ </span>
			<span >ORDER NOW TO GET 20% DISCOUNT</span>
			<span >ORDER NOW TO GET 20% DISCOUNT</span>
		</div>:
		<div id="navbara" >
		<span >FREE SHIPPIN FOR ORDERS $50+ </span>
		<span >ORDER NOW TO GET 20% DISCOUNT</span>
		<span >ORDER NOW TO GET 20% DISCOUNT</span>
	</div>
			)}
		</Media>
			<Media query="(min-width:800px)">
				{matches=>( matches?
		<div id="maindiv">
			<img src="" alt="" />
     <ul style={{marginTop:"20px"}}>SINGLE ORIGIN & OTHER PRODUCTS</ul>
	 <ul style={{marginLeft:"300px"}}> <span id="spanone">HONEY </span> <br /> CHOCOLATES</ul>
	 <ul id="ulone" style={{marginLeft:"200px",marginTop:"10px"}}>ABOUT US</ul>
 	<ul id="ulone" style={{marginTop:"10px"}}>THE HIVE</ul>
	<ul id="ulone" style={{marginTop:"10px"}}>BLOG</ul>	
			
		</div>:
				  <div>
					<div id="Resnav">
						<ul>SINGLE ORIGIN & OTHER PRODUCTS</ul>
					<ul id="ulonea"> <span id="spanone">HONEY </span> <br /> CHOCOLATES</ul>	
					</div>
					<div id="mainsub">
			<ul>ABOUT US</ul>
			<ul>THE HIVE</ul>
			<ul>BLOG</ul>
			<ul>FaCalculator</ul>
		</div>
					  </div>
					  

				  
				  

				)}

			</Media>
			 
		{/*  */}
		<Media query="(min-width:800px)">
			{matches=>(
				matches?

				<div id="textimg">
					 <img src="" alt="" />
                   <div class="wrap">
					 <div class="wrap2">
						 <div class="body">
							</div>
							 <div class="wing1"></div>
							  <div class="wing2"></div>
							   <div class="stinger"></div>
							    <div class="eyes">
								<div class="pupil"></div>
								 </div> 
								 </div>
								  </div>
								  <div id="text">
        <h1 id="head1">Honey</h1>
        <h4 id="head2">meets</h4>
        <h1 id="head3">Chocolate</h1>
		<p>You've never tasted chocolate like this...</p>
        <button id="Btnd">Shop Now</button>
        </div>

				   <div>
	<img id="image" src="https://ahmed-resume-e6932.web.app/final.jfif" alt="" />
</div>
				</div>
				   :
				   <div id="textimga">
				   <div id="texta">
				   <h1 id="head1">Honey</h1>
				   <h4 id="head2">meets</h4>
				   <h1 id="head3">Chocolate</h1>
				   <p>You've never tasted chocolate like this...</p>
				   <button id="Btnda">Shop Now</button>
				   </div>
				     <div class="wrapa"> <div class="wrap2a"> <div class="bodya"></div> <div class="wing1a"></div> <div class="wing2a"></div> <div class="stingera"></div> <div class="eyesa"> <div class="pupila"></div> </div> </div> </div>
					 <div>
					 <img id="image" src="https://ahmed-resume-e6932.web.app/final.jfif" alt="" />
				 </div>
					 </div>
			)}
		</Media>

		
      

        {/* <div id="text">
        <h1 id="head1">Honey</h1>
        <h4 id="head2">meets</h4>
        <h1 id="head3">Chocolate</h1>
		<p>You've never tasted chocolate like this...</p>
        <button id="Btnd">Shop Now</button>
        </div> */}
       <div>
	<img id="image" src="https://ahmed-resume-e6932.web.app/final.jfif" alt="" />
</div>

</div>      
    )
}
export default App






/////////////////////////// task 5

// import './App.css';
// import {  useState } from 'react'
// import Aa from './Components/A.jsx'
// import Bb from './Components/B.jsx'
// import Cc from './Components/C.jsx'
// import Dd from './Components/d';
// import Ee from './Components/e';



// function App() {
  
  
//   const [ind , setInd] = useState(0)


//   const next = () => {

//       if(ind < 3){
//         setInd(ind+1)
//       }
//       else{
//         alert("Your response is successfully submited ")
//       }
      
//       console.log(ind)

//   }

//   const back = () => {
//     if(ind > 0){
//       setInd(ind-1)
//     }else{
//       alert('no components')
//     }
//     console.log(ind)
//   }

//   console.log(ind)

//   return(

//     <div>
//       <div>
//        {ind == 0 ? <Bb /> : null}
//        {ind == 1 ? <Cc /> : null}
//        {ind == 2 ? <Dd /> : null}
//        {ind == 3 ? <Aa /> : null}
//        {ind == 4 ? <Ee /> : null}


//       </div>
//     <button onClick={next}>next</button>
//     <button onClick={back}>back</button>
//     </div>
//   )
  
// }

// export default App;

/////////////////////////// task 3

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import Dropdown from 'react-bootstrap/Dropdown';
// import './App.css';

// function App() {

//   const [citiesData, setCitiesData] = useState([])
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedValue, setSelectedValue] = useState("");
//   const [count, setCount] = useState(0)




//   var config = {
//     method: 'get',
//     url: 'https://countriesnow.space/api/v0.1/countries/population/cities',
//     headers: {}
//   };

//   useEffect(() => {

//     axios(config)
//       .then((response) => {
//         setCitiesData(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }, [])

//   return (
//     <div>
//     <div className="App">
//       <div class="wrapper">
//         <div class="search-input">
//           <a href="" target="_blank" hidden></a>
//           <input type="text"  value={searchInput} onChange={(e) => setSearchInput((e.target.value))} placeholder="Type to search cities..." />
          
//           <div style={searchInput.length === 0 || searchInput[0] === " " ? {display:"none"} : {display:"block"}} class="autocom-boxi">
//             <ul>
// {citiesData.length !== 0 ?

//   citiesData.filter((value)=>{
//     if(searchInput === ""){
//       return value;
//     } else if(value.city.toLowerCase().includes(searchInput.toLowerCase())){
//       return value;
//     }
//   })
  
//   .map((e,i)=>{
//     return(
      
//         <li onClick={()=>{
//           setSelectedValue(e.city);
//              setSearchInput("")
//         }} key={i}>{e.city}</li>

      
//       )
//     })

//     :
//     <li>No City Found!</li>
// }
    

//             </ul>
//           </div>
//           <div class="icon"><FiSearch onClick={()=>{
//            if(citiesData.find(val => val.city.toLowerCase() === searchInput.toLowerCase())){
//              setSelectedValue(searchInput);
//              setSearchInput("")
//            }else{
//             alert("This city is not available!")
//            }

//           }} style={{ marginTop: 15 }} size={22} /></div>
//         </div>
//         <br/>
//         <br/>
//         <div style={{marginLeft:"100px"}}>
//       <span>Check In</span>
//     <input id='one' style={{marginLeft:"6px"}} type="date"/>
//     </div>
//     <br/>
//         <br/>
//     <div>
//     <span style={{marginLeft:"100px"}}>Check Out</span>
//     <input id='one' style={{marginLeft:"6px"}} type="date"/>      
//     </div>

//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         {/* <Dropdown.Item>Action</Dropdown.Item>
//         <Dropdown.Item >Another action</Dropdown.Item>
//         <Dropdown.Item >Something else</Dropdown.Item> */}
//          <div><span>Adult {count}</span>   
//           <button style={{marginLeft:"2px"}}  onClick={() => setCount(count + 1)}>+</button>
//           <button style={{marginLeft:"6px"}} onClick={() => setCount(count - 1)}>-</button>
//           </div>
//           <br/>
//          <div><span>Child {count}</span>   
//           <button style={{marginLeft:"2px"}}  onClick={() => setCount(count + 1)}>+</button>
//           <button style={{marginLeft:"6px"}} onClick={() => setCount(count - 1)}>-</button>
//           </div>
        
//       </Dropdown.Menu>
//     </Dropdown>
        
       
       
// {
//   selectedValue ?
//   <p style={{paddingTop:30, textAlign:"center"}}>You searched <span style={{fontWeight:600, color:"rgb(173 112 112)"}}>{selectedValue}</span></p>
//   :
//   null
// }


//       </div>

//      <div style={{marginLeft:"500px"}}>
//       <div style={{marginLeft:"200px", marginTop:"300px"}}>
//       <span>Check In</span>
//     <input id='one' style={{marginLeft:"6px"}} type="date"/>
//     </div>
//     <br/>
//     <div>
//     <span style={{marginLeft:"6px"}}>Check Out</span>
//     <input id='one' style={{marginLeft:"6px"}} type="date"/>      
//     </div>
//       </div>
//     </div>
//     </div>
   
    
//   );
// }

// export default App;
