import React, { useEffect ,useState} from 'react'
import { Grid, Card} from '@mui/material'
import Datalisticon from './Datalisticon'
import axios from 'axios'


export const Datalist = () => {
    const [data,setData]=useState([])
    console.log(data);


    const getData=async()=>{
        const result= await axios.get("http://localhost:3030/earnings")
        setData(result.data)
    }


    useEffect(()=>{
        getData()
    },[])


  return (
    <>
    
    <Grid >
      {data.length>0&&
        data.map(item=>(
          <Card>
           <Datalisticon item={item}/>
          </Card>

           
        ))
      }
      </Grid>

    </>
  )
}

export default Datalist
