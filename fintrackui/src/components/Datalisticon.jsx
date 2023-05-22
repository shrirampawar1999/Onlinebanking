import React from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";

export const Datalisticon = ({ item }) => {
  const handledelete= async (item)=>{
     const payload = {item}
     await axios.post("mongodb://localhost:27017/findb.earnings",payload)

  }
  return (
    <>
    <Grid container spacing={4}>
    <Grid item xs={3}>
      
        {item.item}
      </Grid>
      <Grid item xs={3}>
        {item.cat}
      </Grid>
      <Grid item xs={2}>
        {item.amnt}
      </Grid>
      <Grid item xs={2}>
       <Button variant="contained" size="small" color="success">Edit</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" size="small" color="error" onClick={()=>handledelete(item)}>Delete</Button>
      </Grid>
    </Grid>
     
    </>
)
};

export default Datalisticon;
