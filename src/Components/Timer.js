import { useState,useEffect } from "react";
function Timer(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
    const timerId=  setInterval(()=>{
         setCount((e)=>{
          return e+1
         })
      },1000)
      return (
        ()=>{
          clearInterval(timerId)
        }
      )
    },[])
  
return (
<div className="App">
<p>count:{count}</p>
</div>
);
}
export default Timer