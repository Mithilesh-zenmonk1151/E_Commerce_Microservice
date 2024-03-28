import { Stack, Typography } from '@mui/material';
import React from 'react';
import "./CategoryComponent.css"
type CategoryProps={
    categoryLogo?:string,
    categoryAlt?:string,
    text?:string

}
const CategoryComponent = (props: CategoryProps) => {
    const {categoryLogo,categoryAlt,text}=props
  return (
    <Stack sx={{
      display:"flex",
      flexDirection:"row",
      height:"56px",
      width:"158px",
      bgcolor:"#F6F7F8",
      borderRadius:"12px",
      alignItems:"center",
      gap:"15px",

    }}>
        <img src={categoryLogo} alt={categoryAlt} className='category-logo'/>
        <Typography sx={{
          fontSize:"12px",
          fontFamily:"Roboto",
          fontWeight:"600"
        }}>{text}</Typography>

    </Stack>
  );
}

export default CategoryComponent;
