import Employ from "./employe"


const Desig=()=>{
    return(
        <>
        {
            
            Employ.filter(val=>val.designation=="react developer").map(val=>
                <>

                {/* <h1>REACT DEVELOPERS</h1> */}
                <h2>name:{val.name}</h2>
                <h2>designation:{val.designation}</h2>
                </>
                )
                
        }
        {
            Employ.filter(val=>val.designation=="angular developer").map(val=>
                <>

                {/* <h1>REACT DEVELOPERS</h1> */}
                <h3>name:{val.name}</h3>
                <h3>designation:{val.designation}</h3>
                </>
                )
        }
        {
            Employ.filter(val=>val.designation=="python developer").map(val=>
                <>
                <h2>name:{val.name}</h2>
                <h2>desingnation:{val.designation}</h2>
                </>
                )
        }

        </>
    )
}

export default Desig