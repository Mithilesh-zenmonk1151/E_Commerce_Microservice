import { Box, Stack } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DropDown from '../../../../component/dropDown/DropDown';
import "./AddProductHeader.css"

function AddProductHeader() {
    return (
       <Stack sx={{
        bgcolor:"#ffffff",
        width:"80vw",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        height:"70px",

       }}>
        <Box>

        </Box>
        <Box  sx={{display:"flex",
        gap:"36px",
        alignItems:"center"

        }}>
        <SearchIcon/>
        <NotificationsIcon/>
        <DropDown text='Admin'option1='Admin' option2='Customer' option3='Vender' customClassName='drop-header'/>
        </Box>
       </Stack>
    )
}

export default AddProductHeader
