import { Box } from '@mui/material';
import React from 'react';
import HeaderLayout from './layout/headerlayout/HeaderLayout';
import trophyLogo from "../../assets/meddal.jpg"
import StepperComponent from '../../component/steppercomponent/StepperComponent';
import CategoryComponent from '../../component/categoryComponent/CategoryComponent';
import wineLogo from "../../assets/wine.png"
import champagneLogo from "../../assets/champagne.jpg"
import whiskyLogo from "../../assets/whisky.jpg"
import floralLogo from "../../assets/Floral.png"
import birthdayLogo from "../../assets/Birthday.jpg"
import sweetTreats from "../../assets/sweetTreats.jpg"
import beutyLogo from "../../assets/lipstick.png"
import fragnancesLogo from "../../assets/frag.jpg"
import kidsLogo from "../../assets/jpegkids.jpg"
import product1Logo from "../../assets/headPhone.jpg"
import trchieLogo from "../../assets/headPhone.jpg"
import productLogo from "../../assets/champagne.jpg"
import SubCategory from '../../component/subCategory/SubCategory';
import ProductCard from '../../component/productCard/ProductCard';


const Home = () => {
  return (
    <Box>
        <HeaderLayout/>
        <Box sx={
            {
                // height:"1px",
                // width:"100%",
                // bgcolor:"black",
                
            }
        }>
          <StepperComponent/>


        </Box>
       <Box sx={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",

       }}>
       <Box sx={{
          display:"flex",
          alignItems:"center",
          // position:"relative",
          // height:"75vh",
          gap:"25px",
          flexWrap:"wrap",
          width:"72.3%"
        }}>
          <CategoryComponent  categoryLogo={trophyLogo} categoryAlt='trophy' text='Popular'/>
          <CategoryComponent  categoryLogo={wineLogo} categoryAlt='trophy' text='Wine'/>
          <CategoryComponent  categoryLogo={champagneLogo} categoryAlt='trophy' text='Champagne'/>
          <CategoryComponent  categoryLogo={whiskyLogo} categoryAlt='trophy' text='Whiskey'/>
          <CategoryComponent  categoryLogo={ floralLogo} categoryAlt='trophy' text='Floral'/>
          <CategoryComponent  categoryLogo={birthdayLogo} categoryAlt='trophy' text='Birthday'/>
          <CategoryComponent  categoryLogo={sweetTreats} categoryAlt='trophy' text='Sweet Treats'/>
          <CategoryComponent  categoryLogo={beutyLogo} categoryAlt='trophy' text='Beuty'/>
          <CategoryComponent  categoryLogo={fragnancesLogo} categoryAlt='trophy' text='Fragrances'/>
          <CategoryComponent  categoryLogo={kidsLogo} categoryAlt='trophy' text='For Kids'/>
          <CategoryComponent  categoryLogo={trchieLogo} categoryAlt='trophy' text='For Techies'/>
        </Box>
        

       </Box>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"33px",
        justifyContent:"center",
        mt:"25px",
        width:"100%"
       }}>
       <Box sx={{
        display:"flex",
        justifyContent:"center",
        width:"42%",
       }}>
          <SubCategory heading='Sporouts Farmers Market' deliveryTime='Deliver by 10:01am' pickupStatus='Pickup available'  />
        </Box>
         <Box sx={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          overflow:"hidden"

         }}>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={floralLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={sweetTreats} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={wineLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={floralLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={whiskyLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={product1Logo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>

         </Box>
       </Box>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"33px",
        justifyContent:"center",
        mt:"25px",
        width:"100%"
       }}>
       <Box sx={{
        display:"flex",
        justifyContent:"center",
        width:"42%"
       }}>
          <SubCategory heading='Sporouts Farmers Market' deliveryTime='Deliver by 10:01am' pickupStatus='Pickup available'  />
        </Box>
         <Box sx={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          overflow:"hidden"

         }}>
         <ProductCard src={product1Logo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={floralLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={wineLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={whiskyLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={sweetTreats} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>

         </Box>
       </Box>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"33px",
        justifyContent:"center",
        mt:"25px",
        width:"100%"
       }}>
       <Box sx={{
        display:"flex",
        justifyContent:"center",
        width:"42%"
       }}>
          <SubCategory heading='Sporouts Farmers Market' deliveryTime='Deliver by 10:01am' pickupStatus='Pickup available'  />
        </Box>
         <Box sx={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          overflow:"hidden"

         }}>
         <ProductCard src={floralLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={sweetTreats} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={wineLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={whiskyLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>
         <ProductCard src={productLogo} price='7.99' title='SIMPLE JOYS' body='BAKERY Sliced ' quantity='10 oz'/>

         </Box>
       </Box>
    </Box>
  );
}

export default Home;
