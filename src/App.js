import "./App.css";
import { useState, useEffect } from "react"; 
import Timer from './Components/Timer'
import ScrollComponent from "./Components/ScrollComponent";
function App() {
 return(
  <div style={{width:"200px",height:"1000px",border:"1px solid red"}}>
  
  <Timer/>
  <ScrollComponent/>
  </div>
 )
}

export default App;
