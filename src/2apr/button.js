import { Component } from "react";
import { FallingLines } from "react-loader-spinner";
import Counter from "./counter";


class Btn extends Component{
    state={
        isSubscribe:false,
        text1:"subcribe",
        text2:"subscribed"
    }
    ChangeSubscribe=()=>{
// console.log("clicked")
this.setState(
    {
        isSubscribe:!this.state.isSubscribe
    }
)
    }
    render(){
        return(
            <>
            <button style={{color:this.state.isSubscribe?"green":"red"}} onClick={this.ChangeSubscribe}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
            {
                this.state.isSubscribe
                ?
                <>
                <h3>welcome user</h3>
                <Counter/>
                </>
                :
                <h3>please subscribe</h3>
            }
            </>
        )
    }
}
export default Btn