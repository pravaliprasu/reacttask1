import { arrayOfObjects } from "./data"
import TableRow from "./tablerow"


const TableComponent=()=>{
    return(
        <table style={{ width: "100%" }}>
  <tbody>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  {
    arrayOfObjects.map((EachArray)=>{
        return(
       <TableRow data={EachArray}extraprop={"pravali"}/>
        )
    })
  }
  </tbody>
</table>

    )
}
export default TableComponent