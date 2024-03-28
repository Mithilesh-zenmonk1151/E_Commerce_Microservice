import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import "./subCategory.css"
import Avatars from '../avatar/AvatarI'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
type  SubcategoryProps={
    heading?:string,
    deliveryTime?:string,
    pickupStatus?:string,
    SubcategoryTypographyCustomClass?:"string"
}

const SubCategory = (props: SubcategoryProps) => {
  const {heading,deliveryTime,pickupStatus,SubcategoryTypographyCustomClass}=props
    return (
   <Box sx={{
    display:"flex",
    gap:"10px"
   }}>
    <Avatar sx={{
      height:"48px",
      width:"48px"
    }}/>
    <Box>
        <Typography sx={{
          fontFamily:"Roboto",
          fontWeight:"600",
          fontSize:"18px"
        }}>
            {heading}
        </Typography>
        <Typography sx={{
          fontSize:"12px",
          fontWeight:"600",
          fontFamily:"Roboto",
          color:"rgba(10,173,10,1)",
          
        }}>{deliveryTime}</Typography>
        <Typography className={SubcategoryTypographyCustomClass}  sx={{
          fontFamily:"Roboto",
          fontSize:"12px"
        }}>{pickupStatus}</Typography>
    </Box>
   <Box sx={{
    display:"flex",
    alignItems:"center",
    fontSize:"130px"

    
   }}>
   <NavigateNextIcon sx={{
    height:"55px",
    width:"25px",
   }}/>
   </Box>

   </Box>
  )
}

export default SubCategory
