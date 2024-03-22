import { Paper } from '@mui/material'
import React from 'react'
import Buttons from '../../../component/button/Button'
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import HailIcon from '@mui/icons-material/Hail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
function DashBoardHero() {
  return (
   <Paper sx={{
    bgcolor:"#ffffff",
    height:"749px",
    width:"259px",
    ml:"30px",
    display:"flex",
    flexDirection:'column',
    gap:"20px",
    borderRadius:"5px",
    paddingLeft:"20px"
   }}>
    <Buttons src={<InfoIcon/>} text='Persional Information'/>
    <Buttons src={<SecurityIcon/>} text='Security'/>
    <Buttons text='Billing & Tax' src={<HailIcon/>}/>
    <Buttons text='Plans' src={<ListAltIcon/>}/>
    <Buttons text='Linked Shops' src={<WorkOutlineIcon/>}/>
   </Paper>
  )
}

export default DashBoardHero
