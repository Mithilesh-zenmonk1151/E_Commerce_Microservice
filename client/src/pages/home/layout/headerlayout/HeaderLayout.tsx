import { Box, Stack } from '@mui/material';
import React from 'react';
import "./HeaderLayoutHome.css"
import instaCartLogo from "../../../../assets/instacartLogo.png"
import TableRowsIcon from '@mui/icons-material/TableRows';
import SearchBar from '../../../../component/searchBar/SearchBar';
import RoomIcon from '@mui/icons-material/Room';
import Buttons from '../../../../component/button/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderLayout = () => {
  return (
    <Stack sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        textAlign:"center",
    }}>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        }}>
         <TableRowsIcon/>
         <img src={instaCartLogo} alt='instaCartLogo' className='insta-logo'/>
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            gap:"30px",
            alignItems:"center"
        }}>
            <SearchBar customPlaceHolder='Search products, stores, and recipes' customClassForSearchBar='searchBar-class'/>
            <RoomIcon/>
            <Buttons customClasses='custom-login' text='Log in'/>
            <ShoppingCartIcon/>

        </Box>
       
    </Stack>
  );
}

export default HeaderLayout;
