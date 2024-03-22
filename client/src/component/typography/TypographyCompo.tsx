
import { Box,Typography } from '@mui/material'
import React from 'react'
type HeadingProp={
    heading?: string,
    body?:String,
    variant?: 'h4'|'p'
}

function TypographyCompo(props:  HeadingProp) {
    const {heading, body}= props
  return (
    <Box>
        <Typography variant='h6' sx={{
          fontSize:"18px",
          fontWeight:"900",
          fontFamily:"sans-serif"
        }}>
            {heading}
        </Typography>
        <Typography sx={{
          fontSize:"13px",
          fontFamily:"sans-serif",
          fontWeight:"700"
        }} >
          {body}
        </Typography>
      
    </Box>
  )
}

export default TypographyCompo

