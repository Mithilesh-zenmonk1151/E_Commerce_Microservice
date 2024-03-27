import { Box } from '@mui/material';
import React from 'react';
import MapCard from '../../../../component/mapCard/MapCard';

const OrderBodyLeft = () => {
  return (
   <Box sx={{
    bgcolor:"#ffffff",
    height:"71vh",
    borderRadius:"22px"
   }}>
  <MapCard/>
   </Box>
  );
}

export default OrderBodyLeft;
