import React from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";

export const Datalistitem = ({ item, doRefresh }) => {
  const handleDelete = async (_id) => {
    const payload = { _id };
    await axios.post("http://localhost:3030/earningdelete", payload);
    doRefresh();
  };
  return (
    <React.Fragment>
      <Grid item xs={3} sx={{ border: "1px solid grey" }}>
        {item.item}
      </Grid>
      <Grid item xs={3} sx={{ border: "1px solid grey" }}>
        {item.cat}
      </Grid>
      <Grid item xs={2} sx={{ border: "1px solid grey" }}>
        {item.amnt}
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="success">
          {" "}
          Edit
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => handleDelete(item._id)}
          variant="contained"
          color="error"
        >
          {" "}
          Delete
        </Button>
      </Grid>
    </React.Fragment>
  );
}