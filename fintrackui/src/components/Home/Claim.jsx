import { useState } from "react";
import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export const Claim = () => {
  const [empId, setEmpId] = useState(0);
  const [amnt, setAmnt] = useState(0);
 const handleSubmit=()=>{
    const payload={
        empId,
        amnt,
    }
    localStorage.setItem("expclaim",JSON.stringify(payload))
 }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Employee Id"
            onChange={(e) => setEmpId(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="outlined"
            label=" Amount"
            onChange={(e) => setAmnt(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Claim;
