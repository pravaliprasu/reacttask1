import CustomCard from "./reactbootstarp/cards"

const First=()=>{
    return(
        <>
      
  <title>Bootstrap 5 Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <CustomCard loadervisible={true} name={"pravali"} imageurl={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
      </div>
      <div className="col-sm-4">
      <CustomCard loadervisible={false} name={"hithihas"} imageurl={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
      </div>
      <div className="col-sm-4">
      <CustomCard loadervisible={true} name={"jiyansh"} imageurl={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
      </div>
    </div>
  </div>
</>

   
    )
}

export default First