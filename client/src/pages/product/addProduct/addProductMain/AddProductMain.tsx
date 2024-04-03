import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import TextFieldCompo from '../../../../component/textField/TextFieldCompo'
import "./AddProductMain.css"
import { DropzoneArea } from 'material-ui-dropzone';
import DragDrop from '../../../../component/dragDrop/DargDrop';
import Buttons from '../../../../component/button/Button';
import Progressbar from '../../../../component/progressBar/Progressbar';

function AddProductMain() {
    return (
       <Stack sx={{
        display:"grid",
        gridTemplateColumns:"auto auto",
         gap:"60px",
         paddingTop:"45px",
         bgcolor:"#ffffff",
         width:"1108px",
       position:"relative",
       left:"40px",
       top:"71px",
       borderRadius:"16px",
       height:"100vh"
       }}>
       <Box sx={{
        paddingLeft:"16px"
       }}>
        <TextFieldCompo placeholder='Lorem ipsum' Label='Product Name' Type='text' customClassName='custom-class'/>
        <TextFieldCompo placeholder='Lorem ipsum is A Dummy Text' Label='Description' Type='text' customClassName='custom-class'/>
        <TextFieldCompo placeholder='Sneaker' Label='Category' Type='text' customClassName='custom-class'/>
        <TextFieldCompo placeholder='Addidas' Label='Brand Name' Type='text' customClassName='custom-class'/>
      <Box sx={{
        display:"grid",
        gridTemplateColumns:"auto auto",
         gap:"60px",
       
       }}>
      <TextFieldCompo placeholder='#32A53' Label='SKU' Type='text' customClassName='custom-class'/>
     <TextFieldCompo placeholder='211' Label='Stock Quantity' Type='text' customClassName='custom-class'/>
     <TextFieldCompo placeholder='$110.40' Label='Regular Price' Type='text' customClassName='custom-class'/>
     <TextFieldCompo placeholder='$450' Label='Sale Price' Type='text' customClassName='custom-class'/>

      </Box>
       </Box>
       <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"50px"
       }}>
        <Box sx={{
            bgcolor:"#c8c8c8",
            height:"428px",
            width:"441px"
        }}>
        </Box>
        <Box>
<Typography>Product Gallery</Typography>
  <DragDrop/>
        </Box>
        <Progressbar/>
        <Progressbar/>
        <Progressbar/>

          <Buttons text='upload'/>
       </Box>
       </Stack>
    )
}

export default AddProductMain
