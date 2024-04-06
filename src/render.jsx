// function Render(){
//     const isloggedin=false
//     if(isloggedin){
//         return(
//            <h3>true</h3>
//         )
//     }
//     else{
//         return(
//            <h3>false</h3>
//         )
//     }
// }

// export default Render


// USING TERNARY :

// function Render(){
//     const isloggedin=true
//     return(
//         <h2>{isloggedin?"welcometrue":"false"}</h2>
//     )
// }
// export default Render



// function Render(){

//   const  isloggedin=true
//     return(
//         <>
//         {
//             isloggedin?
//            <Text msg="login true"/>
//            :
//            <Text msg="false"/>

//         }
//         </>
//     )
// }
// export  default Render;

// const Text=({msg})=>{
//     return(
//         <div>
//             <h4>{msg}</h4>
//         </div>
//     )
// }



// USING LOGICAL OPERATOR:

function Render(){
    const isloggedin=true
    return(
      <>
      {
        isloggedin &&
        <Text msg="yes true"/>
}
      </>
    )
}

export  default Render;

const Text=({msg})=>{
    return(
        <div>
            <h4>{msg}</h4>
        </div>
    )
}