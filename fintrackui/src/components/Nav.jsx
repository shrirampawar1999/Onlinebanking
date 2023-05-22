import React from 'react'
import { Link } from 'react-router-dom'
import { Grid,Card,CardContent, Button } from '@mui/material'
export const Nav = () => {
  return (
    <>
      <Card>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item sx={2}> 
                   <Link to ="/home">
                    <Button variant='contained' fullWidth>Home</Button>
                   </Link>
                </Grid>
                <Grid item sx={2}> 
                   <Link to ="/dashboard">
                    <Button variant='contained'fullWidth>Dashboard</Button>
                   </Link>
                </Grid>
                <Grid item sx={2}> 
                   <Link to ="/expences">
                    <Button variant='contained' fullWidth>Expences</Button>
                   </Link>
                </Grid>
                <Grid item sx={2}> 
                   <Link to ="/earnings">
                    <Button variant='contained' fullWidth>Earnings</Button>
                   </Link>
                </Grid>
                {/* <Grid item sx={2}> 
                   <Link to ="/">
                    <Button variant='contained'></Button>
                   </Link>
                </Grid>
                <Grid item sx={2}> 
                   <Link to ="/">
                    <Button variant='contained'></Button>
                   </Link>
                </Grid> */}

            </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Nav
