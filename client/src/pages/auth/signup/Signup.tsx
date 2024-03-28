import React from 'react';
import "./Signup.css"
import { Box, Typography } from '@mui/material';
import HeaderLayout from './headerLayout/HeaderLayout';
import signupLogo from "../../../assets/singupPic.png"
import TextFieldCompo from '../../../component/textField/TextFieldCompo';
import Buttons from '../../../component/button/Button';
import Checkbox from '@mui/material/Checkbox';


const Signup = () => {
  return (
   <Box sx={{
   
   }}>
    <Box>
    <HeaderLayout/>
    </Box>
    <Box sx={{
      bgcolor:"#f9fafb",
      height:"90vh",
      display:"flex",
      justifyContent:"center"
    }}>
      <Box sx={{
         display:"flex",
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
      }}>
        
        <Box sx={{
          display:"flex",
          bgcolor:"white",
          width:"1250px",
          borderRadius:"30px",
          height:"600px"
        }}>
        <img src={signupLogo} alt='signup' className='signup-logo'/>
        <Box sx={{
          bgcolor:"white",
          padding:"30px"
        }}>
          <Typography variant='h4' sx={{
            fontFamily:"Roboto",
            fontSize:"35px",
            fontWeight:"500"
          }}>Create Your Free Acount</Typography>
          <Box>
            <TextFieldCompo Label='Your email' placeholder='Enter your email id here'/>
            <TextFieldCompo Label='Password' placeholder='.........'/>
            <TextFieldCompo Label='Confirm Password' placeholder='..........'/>
          </Box>
         <Box sx={{
          display:"flex",
          textAlign:"center",
          alignItems:"center"
         }}>
         <Checkbox
     aria-label='I accepted the Term and conditions'
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <Typography>I accepted the Term and Conditions</Typography>
         </Box>
          <Buttons text='Create account' typographyCustomClass='type-signup' customClasses='signup-btn'/>
        </Box>
        </Box>
      </Box>

    </Box>
   </Box>
  );
}

export default Signup;
