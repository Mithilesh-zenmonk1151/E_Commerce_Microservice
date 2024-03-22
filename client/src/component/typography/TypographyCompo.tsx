
import { Box,Typography } from '@mui/material'
import React from 'react'
type HeadingProp={
    heading?: string,
    body?:String,
    variant?: 'h4'|'p',
    customClassName?: string
}

function TypographyCompo(props:  HeadingProp) {
    const {heading, body,customClassName}= props
  return (
    <Box sx={{
      fontFamily:"Poppins",

    }}>
        <Typography variant='h6' className={customClassName} sx={{
          fontSize:"28px",
          fontWeight:"900",
          fontFamily:"Poppins"
        }}>
            {heading}
        </Typography>
        <Typography sx={{
          fontSize:"13px",
          fontWeight:"700",
          paddingTop:"13px"
          
        }} >
          {body}
        </Typography>
      
    </Box>
  )
}

export default TypographyCompo

