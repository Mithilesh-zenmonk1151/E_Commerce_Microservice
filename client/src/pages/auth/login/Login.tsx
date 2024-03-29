import { Box, Typography } from '@mui/material';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import "./Login.css"
import HeaderLayout from '../signup/headerLayout/HeaderLayout';
import loginLogo from "../../../assets/loginPic.png"
import TextFieldCompo from '../../../component/textField/TextFieldCompo';
import Buttons from '../../../component/button/Button';
import { Check, CheckBox } from '@mui/icons-material';
const Login = () => {
  return (
   <Box>
    <Box>
      <HeaderLayout/>
    </Box>
    <Box sx={{
      bgcolor:"#cbd4dc",
      height:"94vh",
      display:"flex",
      justifyContent:"center"
    }}>
      <Box  sx={{
         display:"flex",
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
      }}>
        <Box  sx={{
          display:"flex",
          bgcolor:"white",
          width:"1250px",
          height:"600px",
          borderRadius:"30px"
        
        }}>
          <img src={loginLogo} alt='login' className='login-logo'/>
           <Box  sx={{
          bgcolor:"white",
          padding:"30px"
        }}>
           <Typography variant='h4' sx={{
            fontFamily:"Roboto",
            fontSize:"35px",
            fontWeight:"500"
          }}>Sign In</Typography>
            <Box sx={{
              display:"flex",
              flexDirection:"column",
              gap:"30px"
            }}>
            <TextFieldCompo Label='Your email' placeholder='Enter your email id here'/>
            <TextFieldCompo Label='Password' placeholder='.........'/>
          </Box>

         <Box sx={{
          display:"flex",
          flexDirection:"column",
          gap:"30px",
          mt:"30px"

         }}>
         <Box sx={{
          display:"flex",
          textAlign:"center",
          alignItems:"center",
          gap:"30px",
         }}>
              <Checkbox
     aria-label='I accepted the Term and conditions'
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <Typography>Remind me</Typography>


          </Box>
          <Buttons text='Sign In ' typographyCustomClass='type-signup' customClasses='signup-btn'/>

         </Box>

           </Box>
        </Box>

      </Box>

    </Box>
   </Box>
  );
}

export default Login;
