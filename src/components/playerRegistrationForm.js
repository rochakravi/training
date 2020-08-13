import React, {Component} from "react";

class PlayerRegistrationForm extends Component {
    render(){
        return(
            <div>
                <form>
                    <h1>Welcome to Cricket Player Registration</h1>
                    <h3>Enter your details below to register yourself</h3>
                    <p>Name</p>
                    <input type="text"/>
                    <p>Age</p>
                    <input type="text"/>
                    <p>Adhar Card Details</p>
                    <input type="text"/>
                    <p>Phone Number</p>
                    <input type="text"/>
                    <p>Skills (Select any one)</p>
                    <select>
                    <option selected value="select">Select appropriate skill</option>
                    <option value="batting"> Batting </option>
                    <option value="bowling"> Bowling </option>
                    <option value="wicket"> Wicket Keeping </option>
                    <option value="fielding"> Fielding </option>
                    <option value="allRounder"> All Rounder </option>
                    </select>
                    <p></p>
                    <p><button onClick={() => alert('Registration done successfully')}>Register</button></p>
                </form>
            </div>
        )
    }

}

export default PlayerRegistrationForm;