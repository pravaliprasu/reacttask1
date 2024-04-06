import { Component } from "react";


class Counter extends Component{

    state={
        count:0
    }

    incrementCount=(event)=>{
        // console.log(event)
        this.setState({
            count:this.state.count+event
        })
    }

    // incrementCount=()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
    decrementCount=()=>{
    
        this.setState({
          
            count:this.state.count-1
        
        })

    }
    resetCount=()=>{
        this.setState({
            count:0
    })
    }
    render(){
        return(
            <>
            {/* <h3>Counter example</h3> */}
            <h3>count{this.state.count}</h3>
            <button onClick={()=>this.incrementCount(10)}>increment by 10</button>
            <button onClick={()=>this.incrementCount(1)}>incrementCount</button>
            <button onClick={this.decrementCount}>decrementCount</button>
            {/* <button onClick={this.incrementCount>0?this.decrementCount:this.resetCount}>decrementCount</button> */}
            <button onClick={this.resetCount}>resetCount</button>
            </>
        )
    }
}

export default Counter