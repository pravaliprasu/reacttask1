import logo from './logo.svg';
import './App.css';
// import One from "./dup1.jsx"
// import Two from "./dup2.jsx"
// import Three from "./dup3.jsx"
// import Four from "./dup4.jsx"
// import Five from "./dup5.jsx"
//import A from "./fake.jsx"
// import Api from "./fake1.jsx"
import Button from './components1/button';
import Image from './components1/image.jsx';
import Table from "./components1/table.jsx"
import List from "./components1/list.jsx"
import Forms from "./components1/forms.jsx"
import ListComponents from './28mar/list.jsx';
import TableComponent from './29mar/tables/table.jsx';
import CustomButton from './components1/button';
import Render from './render.jsx';
import ListShow from './29mar/tables/map.jsx';
import Desig from './30mar/desig.jsx';
import Salary from './30mar/salary.jsx';
import Veg from './30mar/ListShow.jsx';
import CustomText from './1apr/inlinestyle.js';
import External from './1apr/external.js';
import Module from './1apr/module.js';
import First from './1apr/firstpage.js';
import CustomCard from './1apr/reactbootstarp/cards.js';
import Btn from './2apr/button.js';


function App() {
  return (



    // <div className="App">
     <div>

      {/* <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/> */}
      {/* <A/> */}

{/* <Api/> */}
 {/* <Button/> 
<Button/>
<Button/>
<Image/>
<Table/>
<List/>
<Forms/>  */}

{/* <ListComponents/> */}
{/* <TableComponent/> */}



{/* 1ST METHOD */}
{/* 
<CustomButton text={"login"}/>
<CustomButton text={"sign in"}/> */}


{/* 2ND METHOD: */}

{/* <CustomButton>sign in</CustomButton>
<CustomButton>login</CustomButton> */}


{/* 3RD METHOD: */}
{/* 
<CustomButton><button>login</button></CustomButton>
<CustomButton><button>forgot password</button></CustomButton> */}

{/* <CustomButton><ButtonComponent/></CustomButton> */}


{/* <Render/> */}

{/* <Render/>*/}

{/* <Render/> */}


{/* <ListShow/> */}

{/* <Desig/> */}
{/* <Salary/> */}

{/* <Veg/> */}

 {/* <CustomText/>

<External/>

<Module/> */}

{/* <First/> */}


{/* <CustomCard/> */}
{/* <h4 className={pravali.moduletext}>module</h4> */}

<Btn/>


    </div>

    
  );
}

export default App;

function ButtonComponent(){
  return(
    <div>
      <button>forgot</button>
    </div>
  )
}