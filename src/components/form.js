import React, { Component } from "react";

class Form extends Component{
    render() {
        function myfunction() {
            alert("Your form has been submitted!");
          }
        return (
            <div>
            <form>
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
                <p><button onClick = {myfunction}>Submit</button></p>
                </form>
            </div>
        );
    };
};

export default Form;