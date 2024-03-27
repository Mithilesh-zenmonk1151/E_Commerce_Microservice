import { Box } from '@mui/material';
import React from 'react';
import HeaderLayout from './layout/headerlayout/HeaderLayout';
import categoryLogo from "../../assets/arrowL.png"
import StepperComponent from '../../component/steppercomponent/StepperComponent';
import CategoryComponent from '../../component/categoryComponent/CategoryComponent';

const Home = () => {
  return (
    <Box>
        <HeaderLayout/>
        <Box sx={
            {
                height:"1px",
                width:"100%",
                bgcolor:"black",
                display:"flex",
                justifyContent:"center",
                 alignContent:"center"
            }
        }>
          <StepperComponent/>


        </Box>
        <Box>
          <CategoryComponent categoryLogo={categoryLogo} />
        </Box>

    </Box>
  );
}

export default Home;
