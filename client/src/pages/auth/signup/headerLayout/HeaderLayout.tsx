import { Box, Typography } from '@mui/material';
import React from 'react';
import Buttons from '../../../../component/button/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const HeaderLayout = () => {
  return (
    <Box> 
 <Box sx={{
    display:"flex",
    justifyContent:"space-between",
    textAlign:"center"
 }}>
    <Box sx={{
        display:"flex",
        justifyContent:"space-around",
        width:"42%",
        textAlign:"center",
        alignItems:"center"
    }}>
        <Typography>Dashboard</Typography>
        <Typography>Team</Typography>
        <Typography>Projects</Typography>
        <Typography>Calender</Typography>

    </Box>
    <Box sx={{
       marginTop:"10px"
    }}>
        <Buttons text='Login/Register' src={<ExitToAppIcon/>}/>
    </Box>

 </Box>
 <Box sx={{
    height:"1px",
    bgcolor:"black",
    width:"100%"
 }}>

 </Box>
 </Box>
  );
}

export default HeaderLayout;
