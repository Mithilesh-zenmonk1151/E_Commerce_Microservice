import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
type AvatarProps={
    src?:string,
    name?:string,
    role?: string,
    location?:string,

}


function Avatars(props: AvatarProps) {
    const {src,name, role, location}=props
    return (
        <Stack direction="row" spacing={1}>
      <Avatar alt="Remy Sharp" src={src} />
      <Box sx={{
        fontFamily:" Helvetica",
        
      }}>
      <Typography sx={{
        fontFamily:"Helvetica",
        fontSize:"12px",
        fontWeight:"900"
      }}>{name} Mark Collin</Typography>
      <Typography sx={{
        fontFamily:"Helvetica",
        fontSize:"10px",
        fontWeight:"500"
      }}>{role} Bussinessman </Typography>
      <Typography sx={{
        fontFamily:"Helvetica",
        fontSize:"10px",
        fontWeight:"500"
      }}>{location} Location</Typography>
      </Box>
      </Stack>
    )
}

export default Avatars
