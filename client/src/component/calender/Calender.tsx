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
        position:"relative",
       
      
        
       
       }}>
        <CalendarMonthIcon />
       <Box sx={{
        display:"flex",
        position:"absolute",
        left:"40px",
        fontFamily: 'Raleway, Arial',

       }}>
       <Typography>
            {day},
        </Typography>
        <Typography>
            {date},
        </Typography>
        <Typography>
            {month}
        </Typography>
       </Box>

        
       </Stack>
    )
}

export default Calender
