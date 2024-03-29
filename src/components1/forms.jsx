import { Component } from "react";

class Forms extends Component{
    render(){
        return(
            <>
            <h3>forms:</h3>
            <form>
                <label for="uname">username:</label>
                <input type="text" id="uname"></input><br></br>
                <label for="pass">password:</label>
                <input type="text" id="pass"></input><br></br>
                <label for="email">email:</label>
                <input type="text" id="email"></input>
            </form>
            </>
        )
    }
}
export default Forms