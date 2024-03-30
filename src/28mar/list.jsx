import ListItems from "./listitems"
import Img from "./prop"
import Image from "../components1/image"
const ListComponents=()=>{
    // const ListItems=["apple","mango","guava","dwd"]

    const List=[{
        name:"apple",
        type:"fruit",
        image:"https://purepng.com/public/uploads/large/purepng.com-applefoodsweettastyhealthyfruitapple-9815246780899e3jo.png"
    },
    {
        name:"mango",
        type:"fruit",
        image:"https://th.bing.com/th/id/OIP.ACqKyXDeb68UHqy9V9_-0gHaE7?rs=1&pid=ImgDetMain"
    },
    {
        name:"guava",
        type:"fruit",
        image:"https://images.hindustantimes.com/img/2022/11/05/1600x900/guava_1667638200010_1667638200263_1667638200263.jpg"
    }
]
    return(
        <div>
            <ol>
                {
                //   <ListItems/>
                List.map((EachObject)=>{
                    return(
                        // <li>{EachObject.name}</li>
                    //   <ListItems items={EachObject.name}/>,
                     <Img images={EachObject.image}/>
                //   <Image images={EachObject.name}/>
                
                    )
                })
                }
</ol>
        </div>
    )
}
export default ListComponents


