import React, { useEffect, useState } from 'react'
import { Grid,Button } from '@mui/material'
import axios from 'axios'

export const LeftNav = () => {
    const [data,setData]=useState([])
    console.log(data);
    const getData=async()=>{
        const result= await axios.get ("http://localhost:3030/categories")
         setData(result.data)
    }

    useEffect(()=>{
       getData()
    },[])
  return (
    <>
      <Grid container spacing={2}>
        {
          data.length >0 &&  data.map((item)=>(
            <Grid item xs={12}>
                <Button variant='contained' color='secondary' fullWidth >{item.name}</Button>
            </Grid>
             ) )
        }
      </Grid>
    </>
  )
}

export default LeftNav
