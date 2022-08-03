


















import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

function App() {

  const [citiesData, setCitiesData] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("");




  var config = {
    method: 'get',
    url: 'https://countriesnow.space/api/v0.1/countries/population/cities',
    headers: {}
  };

  useEffect(() => {

    axios(config)
      .then((response) => {
        setCitiesData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  return (
    <div>
    <div className="App">
      <div class="wrapper">
        <div class="search-input">
          <a href="" target="_blank" hidden></a>
          <input type="text" value={searchInput} onChange={(e) => setSearchInput((e.target.value))} placeholder="Type to search cities..." />
          
          <div style={searchInput.length === 0 || searchInput[0] === " " ? {display:"none"} : {display:"block"}} class="autocom-boxi">
            <ul>
{citiesData.length !== 0 ?

  citiesData.filter((value)=>{
    if(searchInput === ""){
      return value;
    } else if(value.city.toLowerCase().includes(searchInput.toLowerCase())){
      return value;
    }
  })
  
  .map((e,i)=>{
    return(
      
        <li onClick={()=>{
          setSelectedValue(e.city);
             setSearchInput("")
        }} key={i}>{e.city}</li>

      
      )
    })

    :
    <li>No City Found!</li>
}
    

            </ul>
          </div>
          <div class="icon"><FiSearch onClick={()=>{
           if(citiesData.find(val => val.city.toLowerCase() === searchInput.toLowerCase())){
             setSelectedValue(searchInput);
             setSearchInput("")
           }else{
            alert("This city is not available!")
           }

          }} style={{ marginTop: 15 }} size={22} /></div>
        </div>
        <br/>
        <br/>
        <div style={{marginLeft:"100px"}}>
      <span>Check In</span>
    <input id='one' style={{marginLeft:"6px"}} type="date"/>
    </div>
    <br/>
        <br/>
    <div>
    <span style={{marginLeft:"100px"}}>Check Out</span>
    <input id='one' style={{marginLeft:"6px"}} type="date"/>      
    </div>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item >Another action</Dropdown.Item>
        <Dropdown.Item >Something else</Dropdown.Item> */}
         <div><span>Adult {count}</span>   
          <button style={{marginLeft:"2px"}}  onClick={() => setCount(count + 1)}>+</button>
          <button style={{marginLeft:"6px"}} onClick={() => setCount(count - 1)}>-</button>
          </div>
          <br/>
         <div><span>Child {count}</span>   
          <button style={{marginLeft:"2px"}}  onClick={() => setCount(count + 1)}>+</button>
          <button style={{marginLeft:"6px"}} onClick={() => setCount(count - 1)}>-</button>
          </div>
        
      </Dropdown.Menu>
    </Dropdown>
        
       
       
{
  selectedValue ?
  <p style={{paddingTop:30, textAlign:"center"}}>You searched <span style={{fontWeight:600, color:"rgb(173 112 112)"}}>{selectedValue}</span></p>
  :
  null
}


      </div>

     <div style={{marginLeft:"500px"}}>
      <div style={{marginLeft:"200px", marginTop:"300px"}}>
      <span>Check In</span>
    <input id='one' style={{marginLeft:"6px"}} type="date"/>
    </div>
    <br/>
    <div>
    <span style={{marginLeft:"6px"}}>Check Out</span>
    <input id='one' style={{marginLeft:"6px"}} type="date"/>      
    </div>
      </div>
    </div>
    </div>
   
    
  );
}

export default App;
