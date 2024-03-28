import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OrderStatus from '../../../component/orderStatus/OrderStatus';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./OrderUpper.css"
const OrderUpper = () => {
  return (
   <Box sx={{
   
   
    
    
   }}>
  <Box sx={{
    display:"flex",
    fontFamily:"Poppins",
    gap:"10px",
    fontWeight:"600"
  }}>
  <Typography sx={{
    fontWeight:"500",
    fontFamily:"Poppins",

  }}>Order ID:</Typography> 
    <Typography sx={{
    fontWeight:"700",
    fontFamily:"Poppins",

  }}>6756905675690</Typography>
    < ContentCopyIcon/>
  </Box>
  <Box sx={{display:"flex",
 bgcolor:"white",
 fontSize:"10px",
 borderRadius:"20px",
 justifyContent:"space-around",
 padding:"14px",
 marginTop:"15px"}}>
    <OrderStatus productCustomClass='productcustom-product' customsrcClass="customSrc-class" customClassText='customclass-text' src={<CheckCircleIcon/>} text='At Pickup location ' productName='Texas, 19234' dot='..........' />
    <OrderStatus  productCustomClass='productcustom-product' customClassText='customclass-text'src={<CheckCircleIcon/>} text='Departed from Pickup location' productName='Texas, 4554' dot='..........' customsrcClass='customSrc-class'/>
    <OrderStatus  productCustomClass='productcustom-product' customClassText='customclass-text' src={<FiberManualRecordIcon/>} text='Arrived Destination ' productName='NY, 753543' dot='' customsrcClass='customSrc-class'/>
    <OrderStatus  productCustomClass='productcustom-product' customClassText='customclass-text' src={<FiberManualRecordIcon/>} text='Delivered' productName='NY, 753543' />
  </Box>
   </Box>
  );
}

export default OrderUpper;
