import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { Datalistitem } from "./Datalistitem";

export const Datalist2 = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = async () => {
    const result = await axios.get("http://localhost:3030/earning");
    setData(result.data);
    console.log("===>", result.data);
  };
  const doRefresh = () => {
    setRefresh(true);
  };
  useEffect(() => {
    if (refresh) {
      getData();
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {data.length > 0 && data.map((item) => <Datalistitem item={item} />)}
      </Grid>
    </React.Fragment>
  );
};