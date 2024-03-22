import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { relative } from 'path';
type DateProps={
    day?:string,
    date?: string,
    month?: string,
}
function Calender(props: DateProps) {
    const {day,date,month}=props
    return (
       <Stack sx={{
        display:"flex",
        flexDirection:"row",
       
        
       
      
        
       
       }}>
        <CalendarMonthIcon />
       <Box sx={{
        display:"flex",
        left:"40px",
        fontFamily: 'Raleway, Arial',
        mt:"6px"
       

       }}>
       <Typography sx={{ fontSize:"10px"}}>
          Monday{day},
        </Typography>
        <Typography  sx={{ fontSize:"10px"}}>
            26th{date},
        </Typography>
        <Typography  sx={{ fontSize:"10px"}}>
            March{month}
        </Typography>
       </Box>

        
       </Stack>
    )
}

export default Calender
