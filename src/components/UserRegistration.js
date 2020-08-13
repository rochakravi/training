import React, { Component } from 'react';

class UserRegistration extends Component {
    render() {
        function submit() {
            alert("Your form has been submitted!");
          }
        return (
            <div align='center'><h2>User Registration</h2>
               <p> Name: 
                <input type ="text" placeholder="enter your name"/></p>
               <p> Date of Birth:<input type ="date" placeholder="enter your date of birth" /></p>
               <p> Adhar card:<input type ="text" placeholder="enter your aadhar card no." /></p>
               <p> phone:<input type ="text" placeholder="enter your phone no." /></p>
               <p> Interest: <input type ="text" placeholder="enter your Interests"/></p>
            <button name="register" value="register" onClick={submit}>register here</button>            
            </div>
        );
    }
}

export default UserRegistration;