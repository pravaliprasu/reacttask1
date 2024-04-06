// function Button(props){

import { Children } from "react"

    
//     const{text}=props
//     return(
//         <>
//        <h3>button:</h3> 
//         <button>sign in</button> 
       
//         </>
//     )
// }
// export default Button;



// 1ST METHOD

// function CustomButton(props){
//     // const{text}=props
// return(
//     <div>
//         <button>{props.text}</button>
//         {/* <button>{text}</button> */}
//     </div>
// )
// }

// export default CustomButton



// 2ND METHOD:


// function CustomButton(props){
//     const{children}=props
// return(
//     <div>
//         {/* <button>{props.children}</button> */}
//         <button>{children}</button>
//     </div>
// )
// }

// export default CustomButton


// 3RD METHOD:


// function CustomButton(props){
//     console.log(props)
//     const{children}=props
// return(
//     <div>
       
//         {/* <button>{children}</button> */}
//       {children}
//     </div>
// )
// }
// export default CustomButton

function CustomButton({children}){
    return(
        <div>
            {children}
        </div>
    )
}

export default CustomButton