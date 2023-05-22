import { useState, useEffect } from "react";
import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const [curr, setCurr] = useState({});
  const [elig, setElig] = useState(0);
  const [app, setApp] = useState(0);
  const [outs, setOuts] = useState(0);
  const [tobepaid, setToBePay] = useState(0);
  const navigate= useNavigate()

  const handleApprove =  () => {
    const payload = {
      ...curr,
      eligAmnt: elig,
      appAmnt: app,
      outstanding: outs,
      tobepaid,
    };
     localStorage.setItem("expclaim", JSON.stringify(payload));
    navigate("/dashboard")
  };

  const handleReject = () => {
    localStorage.removeItem("expclaim");
    setCurr({})
  };

  useEffect(() => {
    setToBePay(app - outs);
  }, [app, outs]);

  useEffect(() => {
    const currData = localStorage.getItem("expclaim");
    currData && setCurr(JSON.parse(currData));
  }, []);

  return (
    <>
      {curr.empId  && curr.tobepaid && (
        <Grid container spacing={2} align="center">
          <Grid item xs={3}>
            {curr.empId}
          </Grid>
          <Grid item xs={3}>
            {curr.amnt}
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => setElig(e.target.value)}
              fullWidth
              variant="outlined"
              label="Eligible Amount"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => setApp(e.target.value)}
              variant="outlined"
              label="Aproved Amount"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              onChange={(e) => setOuts(e.target.value)}
              variant="outlined"
              label="Outstanding Amount"
            />
          </Grid>
          <Grid item xs={3}>
            To be pay{tobepaid}
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleApprove} variant="contained" color="success">
              Approve
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="error" onClick={handleReject}>
              Reject
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Account;
