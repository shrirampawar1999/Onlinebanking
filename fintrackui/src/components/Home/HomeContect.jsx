import React from "react";
import Claim from "./Claim";
import { Card,CardContent } from "@mui/material";
import Account from "./Account";

export const HomeContect = () => {
  return (
    <>
    <Card>
      <CardContent>
        <Claim/>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Account/>
      </CardContent>
    </Card>
    
          
    </>
  );
};

export default HomeContect;
