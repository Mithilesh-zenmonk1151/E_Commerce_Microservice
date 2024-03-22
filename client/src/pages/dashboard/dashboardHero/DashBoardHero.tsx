import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import Buttons from '../../../component/button/Button'
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import HailIcon from '@mui/icons-material/Hail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Avatars from '../../../component/avatar/AvatarI';
import DashBoardContent from '../dashBoardContent/DashBoardContent';
function DashBoardHero() {
  return (
    <Stack sx={{
      display:"flex",
      flexDirection:"row",
      bgcolor:"#ffffff",
      width:"1042px",
      margin:"30px",
      height:"750px"
     

    }}>
   <Paper sx={{
    bgcolor:"#ffffff",
    width:"259px",
    ml:"30px",
    display:"flex",
    flexDirection:'column',
    gap:"20px",
    borderRadius:"8px",
    paddingLeft:"20px",
    paddingTop:"43px",
    boxShadow:"none"
   }}>
    <Buttons src={<InfoIcon/>} text='Persional Information'/>
    <Buttons src={<SecurityIcon/>} text='Security'/>
    <Buttons text='Billing & Tax' src={<HailIcon/>}/>
    <Buttons text='Plans' src={<ListAltIcon/>}/>
    <Buttons text='Linked Shops' src={<WorkOutlineIcon/>}/>
   </Paper>
   <Box sx={{
    bgcolor:"#cccccc",
    height:"690px",
    width:"0.5px",
    marginTop:"30px",
    opacity:"0.5"
   }}>

   </Box>
   <Box sx={{
    width:"610px",
    position:"relative",
    left:"40px"
   }}>
    <DashBoardContent/>
   </Box>
   </Stack>
  )
}

export default DashBoardHero
