// import React from "../";
// import { useState } from "react";
// import "../App.css"
// function Aa(){
//     const [count, setCount] = useState(0);


//   return(
//     <img src="../final.PNG" alt="" />
    
//     <div id="main" style={{height:"100vh", backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/0/0b/Mountains_%26_Clouds.jpg")`, width:"93.8%", margin:"10px auto" }}>
   
//        <div id="nav">
//         <ul id="nav1">Muntazim</ul>
//         <div id="nav2">
//         <ul>About us</ul>
//         <ul>Contact Us</ul>
//         <ul>Trips</ul>
//        </div>
//        </div>
//               {/* box  */}
//        <div id="box">
//         <div id="boxsub">

//         <div id="count">
//         <p id="Para">Type of Car</p>  
//       <p id="para2"><label for="cars" id="cars">Car: <select name="cars" id="cars">
//   <option  value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>
// </label>


    
// </p>
     
//     </div>
//        </div>
//        </div>
//        </div>
//   )
// }
// export default Aa
import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
Nav,
NavContainer,
NavLogo,
NavItem,
NavLinks,
NavMenu,
MobileIcon,
} from './b';
import '../App.css';
const Navbar = () => {
const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);
return (
	<Fragment>
		<Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
		<NavContainer>
			<NavLogo href="#">GeeksForGeeks</NavLogo>
			<MobileIcon>
			<FaBars />
			</MobileIcon>
			<NavMenu>
				<NavItem>
				<NavLinks href="#">About</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Services</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Events</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Contact</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Sign In</NavLinks>
				</NavItem>
			</NavMenu>
		</NavContainer>
		</Nav>
	</Fragment>
	)
}

export default Navbar;
