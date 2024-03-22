import { Box, Stack } from '@mui/material'
import React from 'react'
import airLogo from "../../../../assets/airlogo.jpg"
import Buttons from '../../../../component/button/Button'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import "./AddProductSidebar.css"

function AddProductSidebar() {
    return (
      <Stack sx={{
        bgcolor:"#ffffff",
        width:"260px",
        height:"100vh",
        display:"flex",
        alignItems:"center"
      }}>
        <Box sx={{
            width:"185px"
        }}>
            <img src={airLogo} alt='airlogo' className='air-logo'/>
        </Box>
        <Box>
            <Buttons text='DASHBOARD'  src={<DashboardIcon/>}/>
            <Buttons text='ALL PRODUCTS' src={<WorkOutlineIcon/>}/>
            <Buttons text='ORDER LIST' src={<SummarizeIcon/>} />
        </Box>
      </Stack>
    )
}

export default AddProductSidebar
