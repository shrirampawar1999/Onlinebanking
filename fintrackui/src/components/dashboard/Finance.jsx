import React from "react";
import { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Finance = () => {
  const [curr, setCurr] = useState({});
  const [paidamnt,setPaidAmnt]=useState(0)
  const [balance,setBalance] =useState(0)
  const navigate =useNavigate()


  const handleApprove=()=>{
     const payload={
      ...curr,
      paidamnt,
      balance
     }
     localStorage.setItem("expclaim",JSON.stringify(payload))
    navigate("/")
  }

  const handleReject=()=>{
    localStorage.removeItem("expclaim")
    navigate("/")
  }
  
  useEffect(() => {
    const currData = localStorage.getItem("expclaim");
    currData && setCurr(JSON.parse(currData));
  }, []);


  useEffect(()=>{
    setBalance(curr.tobepaid-paidamnt)
  },[paidamnt])


  
  return (
    
         <>
         {curr.tobepaid &&
      <Grid container spacing={2} align="center">
        <Grid item xs={2}>
          {curr.empId}
        </Grid>
        <Grid item xs={2}>
          {curr.amnt}
        </Grid>
        <Grid item xs={2}>
          {curr.eligAmnt}
        </Grid>
        <Grid item xs={2}>
          {curr.appAmnt}
        </Grid>
        <Grid item xs={2}>
          {curr.outstanding}
        </Grid>
        <Grid item xs={2}>
          {curr.tobepaid}
        </Grid>
        <Grid item xs={2}>
          <TextField variant="outlined" label="Paid Amount" onChange={(e)=>setPaidAmnt(e.target.value)}  />
      </Grid>
        <Grid item xs={2}>
           {balance}
      </Grid>
      
      <Grid item xs={2}>
       <Button variant="contained" color="success"  onClick={handleApprove} > Approve</Button>
      </Grid>
      <Grid item xs={2}>
       <Button variant="contained" color="error" onClick={handleReject} >Reject</Button>
      </Grid>
      </Grid>
}
    </>
    

  )
 
}



{/* export default Finance; */}
