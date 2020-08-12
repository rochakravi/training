import React, { useState } from "react";

function Myform(){
    const [count, setCount] = useState(0);
    const [application, setApplication] = useState(0);

    function Increment(){
        setCount(count => count + 1);
        alert('Application submitted successfully....');
    }
 return (
    <div>
        
            <h1 style={{backgroundcColor: "#330000"}}>Enter your details for React Training</h1>
            <p>Name:</p>  
            <input
                type="text"
            />
            <p>Experience:</p>
            <input
                type="text"
            />
            <p>Contact No:</p> 
            <input
                type="text"
            />
            <p>Email Id:</p>  
            <input
                type="text"
            />
            <p>No of training sessions attended:{application}</p>

            <button onClick ={() => setApplication(application+1)}>
            +</button>

            <p>No of Applicants : {count}</p>
            
            <p><button onClick ={Increment}>
            Submit</button></p>
        
    </div>
  );
}


export default Myform; 