import Employ from "./employe"


const Salary=()=>{
    return(
        <>
        {
            
            Employ.filter(val=>val.salary>=10000 && val.salary<=20000).map(val=>
                <>

                {/* <h1>REACT DEVELOPERS</h1> */}
                <h2>name:{val.name}</h2>
                <h2>designation:{val.designation}</h2>
                <h2>salary:{val.salary}</h2>
                </>
                )
                
        }
        {
            Employ.filter(val=>val.salary>=20000 && val.salary<=30000).map(val=>
                <>

                {/* <h1>REACT DEVELOPERS</h1> */}
                <h3>name:{val.name}</h3>
                <h3>designation:{val.designation}</h3>
                <h2>salary:{val.salary}</h2>
                </>
                )
        }
        {
            Employ.filter(val=>val.salary>=30000).map(val=>
                <>
                <h2>name:{val.name}</h2>
                <h2>desingnation:{val.designation}</h2>
                <h2>salary:{val.salary}</h2>
                </>
                )
        }

        </>
    )
}

export default Salary