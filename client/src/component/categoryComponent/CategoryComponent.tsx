import { Stack, Typography } from '@mui/material';
import React from 'react';
type CategoryProps={
    categoryLogo?:string,
    categoryAlt?:string,
    text?:string

}
const CategoryComponent = (props: CategoryProps) => {
    const {categoryLogo,categoryAlt,text}=props
  return (
    <Stack>
        <img src={categoryLogo} alt={categoryAlt}/>
        <Typography>{text}</Typography>

    </Stack>
  );
}

export default CategoryComponent;
