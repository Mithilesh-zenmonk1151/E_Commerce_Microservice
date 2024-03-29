import React, { useState } from 'react';
import "./Signup.css"
import { Box, Typography } from '@mui/material';
import HeaderLayout from './headerLayout/HeaderLayout';
import signupLogo from "../../../assets/singupPic.png"
import TextFieldCompo from '../../../component/textField/TextFieldCompo';
import Buttons from '../../../component/button/Button';
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch } from '../../../redux/store/hooks';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../redux/slice/authSlice/auth.action';



const Signup = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  console.log("emaildsgf",email)
  console.log("password", password);
  console.log("confirmPassword",confirmPassword);
 const dispatch= useAppDispatch();
 const navigate= useNavigate();

  const handleOnSubmit=async(e)=>{
    e.preventDefault();
    console.log("handle on Submit")

    // try{
    //    dispatch(createUser())

    // }
    // catch(error){

    // }
  }
// const {
//   handleOnSubmit,register,
//   formState:{error},}=useForm<FormData>({
//     resolver:zodResolver
//   })
// }
  return (
   <Box sx={{
   
   }}>
    <Box>
    <HeaderLayout/>
    </Box>
    <Box sx={{
      bgcolor:"#cbd4dc",
      height:"94vh",
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
          <form onSubmit={handleOnSubmit}>
          <Typography variant='h4' sx={{
            fontFamily:"Roboto",
            fontSize:"35px",
            fontWeight:"500"
          }}>Create Your Free Account</Typography>
         <Box sx={{
          display:"flex",
          flexDirection:"column",
          gap:"26px",
          mt:"10px"
         }}>
         <Box> 
            <TextFieldCompo setValue={setEmail}  Label='Your email' placeholder='Enter your email id here' value={email} Type='email'/>
            <TextFieldCompo setValue={setPassword} Label='Password' placeholder='.........' value={password} Type='password'/>
            <TextFieldCompo setValue={setConfirmPassword} Label='Confirm Password' placeholder='..........' value={confirmPassword} Type='password'/>
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
          <Buttons text='Create account' typographyCustomClass='type-signup' type='submit' customClasses='signup-btn'/>
         </Box>
         </form>
        </Box>
        
        </Box>
        
      </Box>
      

    </Box>
   </Box>
  );
}

export default Signup;
