import React from 'react'
import LeftNav from './Home/LeftNav'
import HomeContect from './Home/HomeContect'
import { Grid ,Card,CardContent} from '@mui/material'

export const Home = () => {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <Card>
                <CardContent>
                    <LeftNav/>
                </CardContent>
            </Card>

        </Grid>
        <Grid item xs={10}>
            <Card>
                <CardContent>
                    <HomeContect/>
                </CardContent>
            </Card>

        </Grid>

    </Grid>
      
    </>
  )
}

export default Home
