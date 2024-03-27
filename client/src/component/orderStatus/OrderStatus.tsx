import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
type OrderStatusProps={
    src?: React.ReactElement,
    text?: string,
    productName?:string,
    dot?:string,
    customsrcClass?:string,
    customClassText?:string,
    productCustomClass?:string

}
const OrderStatus = (props: OrderStatusProps) => {
    const {src,text,productName,dot,productCustomClass ,customsrcClass,customClassText}= props
  return (
  <Stack sx={{
    display:"flex",
    flexDirection:"row",
    gap:"10px"

  }}>
    <Box className={customsrcClass}>{src}</Box>
  <Box>
  <Typography className={customClassText} variant='h5'>{text}</Typography>
    <Typography className={productCustomClass} >{productName}</Typography>
  </Box>
  <Typography sx={{
    position:"relative",
    left:"20px",
   fontSize:"20px",
   fontWeight:"500"
  }}>{dot}</Typography>
     

  </Stack>
  );
}

export default OrderStatus;
