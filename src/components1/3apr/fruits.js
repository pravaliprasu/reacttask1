import { render } from "@testing-library/react";
import { Component } from "react";


class Fruits extends Component{
    state={
        fruits:["apple","banana"]
    }

    addFruit=()=>{
       const newFruits= [...this.state.fruits,"new fruit"]
    //    console.log(newFruits)
this.setState({
   fruits: newFruits
})
    }

deleteFruit=(index)=>{
// console.log(index)
 const newFruits=this.state.fruits.filter((eachFruit,i)=>i!=index)
//  console.log(newFruits)
this.setState({
    fruits:newFruits
})
}
updateFruit=(index)=>{
   const newFruits=this.state.fruits.map((eachElement,i)=>{
      
    if(i===index){
        return "pineapple"
    }
    else{
        return eachElement
    }
   })
//    console.log(newFruits)
 
this.setState({
    fruits:newFruits
})
}



    render(){
        return(

<>
<button onClick={this.addFruit}>add fruit</button>
<ol>
    {
        this.state.fruits.map((eachElement,index)=>{
          return(
           
           <>
          <li>
                {eachElement}
            </li>
            {/* <button onClick={()=>this.deleteFruit(index)}>delete</button> */}
            <button onClick={()=>this.deleteFruit(index)}>delete</button>
            <button onClick={()=>this.updateFruit(index)}>update</button>
            </>
          )
        })
    }
</ol>
</>
        )
    }
}
export default Fruits