import Employes from "./employees"


// MAP:


// const ListShow=()=>{
// return(
//     <div>{
//         Employes.map(value=>
//         <>
//         <h4>{value.name}</h4>
//         <h4>{value.designation}</h4>
//         </>)
        
//     }
//     </div>
// )
// }
// export default ListShow


// FILTER:


// const ListShow=()=>{
//     return(
//         <div>
//             {
//                 Employes.filter(value=>value.designation=="python developer").map(value=>
//                     <>
//                     <h4>name:{value.name}</h4>
//                     <h4>designation:{value.designation}</h4>
//                     </>
//                     )
//             }
//         </div>
//     )
// }

// export default ListShow



// OR




const ListShow=()=>{
    const filterquery="python developer"
    const filterarray=()=>{
        return  Employes.filter(value=>value.designation==filterquery)
    }
    return(
        <div>
            { filterarray().map(value=>
                    <>
                    <h4>name:{value.name}</h4>
                    <h4>designation:{value.designation}</h4>
                    </>
                    )
            }
        </div>
    )
}

export default ListShow