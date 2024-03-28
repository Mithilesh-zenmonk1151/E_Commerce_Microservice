import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatars from '../avatar/AvatarI'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
type  SubcategoryProps={
    heading?:string,
    deliveryTime?:string
}

const SubCategory = (props: SubcategoryProps) => {
  const {heading,deliveryTime}=props
    return (
   <Box>
    <Avatars/>
    <Box>
        <Typography>
            {heading}
        </Typography>
        <Typography>{deliveryTime}</Typography>
    </Box>
    <NavigateNextIcon/>

   </Box>
  )
}

export default SubCategory
