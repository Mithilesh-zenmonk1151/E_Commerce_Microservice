import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
type AvatarProps={
    src?:string,
    name?:string,
    role?: string,
    location?:string,
    customClass?:string

}


function Avatars(props: AvatarProps) {
    const {src,name, role, location,customClass}=props
    return (
        <Stack direction="row" spacing={1} className={customClass}>
      <Box sx={{
        fontFamily:" Helvetica",
        
      }}>
      <Typography sx={{
        fontFamily:"Inter",
        fontSize:"14px",
        fontWeight:"900",
        width:"84px"
      }}>{name}</Typography>
      <Typography sx={{
        fontFamily:"Poppins",
        fontSize:"10px",
        fontWeight:"500"
      }}>{role}</Typography>
      <Typography sx={{
        fontFamily:"Helvetica",
        fontSize:"10px",
        fontWeight:"500"
      }}>{location} </Typography>
      </Box>
      <Avatar alt="Remy Sharp" src={src} />

      </Stack>
    )
}

export default Avatars
