import React from 'react'
import { Card,CardContent } from "@mui/material"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Home} from "./Home"
import {Expences} from "./Expences"
import { Dashboard } from "./Dashboard"
import { Earnings} from "./Earnings"
import Nav from './Nav'

export const Landing = () => {
  return (
    <>
    <Card>
    <CardContent>
     <BrowserRouter>
     <Nav/>
     <Routes>
        <Route path ="/home" element={<Home/>} />
        <Route path ="/dashboard" element={<Dashboard/>} />
        <Route path ="/expences" element={<Expences/>} />
        <Route path ="/earnings" element={<Earnings/>} />
        <Route path ="/" element={<Home/>} />

     </Routes>
     </BrowserRouter>
    
    </CardContent>
    </Card>
           
    </>
  )
}

export default Landing
