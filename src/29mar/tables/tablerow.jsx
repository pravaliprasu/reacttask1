
const TableRow=(props)=>{
    const{data,extraprop}=props
    
    return(
        <tr>
                
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
          <td>{extraprop}</td>
        </tr>
    )
}
export default TableRow