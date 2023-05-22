 import React, { useEffect, useState } from "react";
 import Select from "react-select";
 import axios from "axios";
 import { Grid, Card, TextField, Button, Alert, CardContent } from "@mui/material";
import { Datalist2 } from "./Datalist2";

 
 export const Expences = () => {
   const [item, setItem] = useState("");
   const [cat, setCat] = useState(0);
   const [amnt, setAmnt] = useState(0);
   const [msg, setMsg] = useState("");
   const [isshow, setIsShow] = useState(false);
   const [option, setOption] = useState( [
     
   ]);
 
   const handleadd = async () => {
     const payload = {
       item,
       cat,
       amnt,
     };
     const result = await axios.post(
       "http://localhost:3001/expences",
       payload
     );
     setMsg(result.data);
   };
   const getData=async()=>{
     const result= await axios.get("http://localhost:3001/catdd")
         setOption(result.data)
   }
 
   const resetData=()=>{
     setItem("")
     setAmnt(0)
     setCat(0)
   }
  useEffect(()=>{
     getData()
  },[])
   useEffect(() => {
     if (msg !== "") {
       setIsShow(true);
       resetData()
       setTimeout(() => {
         setMsg("");
       }, 5000);
     } else {
       setIsShow(false);
     }
   }, [msg]);
   return (
     <>
     <Card sx={{height: 500}}>
         <CardContent>
       <Grid container spacing={2}>
         <Grid item xs={3}>
           <Select options={option} onChange={(opt)=>setCat(opt.value)} />
         </Grid>
         <Grid item xs={3}>
           <TextField
           value={item}
             onChange={(e) => setItem(e.target.value)}
             variant="outlined"
             type="text"
             fullWidth
             label="Item"
           />
         </Grid>
         <Grid item xs={3}>
           <TextField
           value={amnt}
             onChange={(e) => setAmnt(e.target.value)}
             variant="outlined"
             type="number"
             fullWidth
             label="Amount"
           />
         </Grid>
         <Grid item xs={3}>
           <Button
             sx={{ height: 55 }}
             variant="contained"
             onClick={handleadd}
             fullWidth disabled={item.length<3 || amnt.length<3}>
             add
           </Button>
         </Grid>
         <Grid item xs={12}>
           {isshow && <Alert severity="success">{msg}</Alert>}
         </Grid>
       </Grid>
       </CardContent>
       </Card>
       <Card>
        <CardContent>
          <Datalist2/>
        </CardContent>
       </Card>
     </>
   );
 };
 
 export default Expences;
 