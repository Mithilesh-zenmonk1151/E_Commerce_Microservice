import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import "./Login.css"
import { RootState } from '../../../redux/store/store';
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import HeaderLayout from '../signup/headerLayout/HeaderLayout';
import loginLogo from "../../../assets/loginPic.png"
import { useForm } from "react-hook-form";
import { useAppDispatch } from '../../../redux/store/hooks';
import TextFieldCompo from '../../../component/textField/TextFieldCompo';
import Buttons from '../../../component/button/Button';
import { LoginSchema, LoginFormData } from './type';
import IconButton from '@mui/material/IconButton';
import { login } from '../../../redux/slice/authSlice/auth.action';

import { Check, CheckBox } from '@mui/icons-material';
import FormField from '../../../component/formField/FormField';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
      setOpen(false);
  };

  const action = (
      <React.Fragment>
          <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
          >
              <CloseIcon fontSize="small" />
          </IconButton>
      </React.Fragment>
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema), // Apply the zodResolver
});

const onSubmit = async (data: LoginFormData) => {
    console.log("SUCCESS", data);
    dispatch(login(data)).then((response: any)=> {
                if(!response.payload) {
                    console.log(response.error.message,'error');
                    // add snackbar showing wrong credentials
                    setOpen(true);

                    navigate("/Login");
                }
                else {
                    localStorage.setItem("token", response.payload.user.token);
                    navigate('/');
                }
            });
}

  
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
           <form>
           <Box sx={{
              display:"flex",
              flexDirection:"column",
              gap:"30px"
            }}>
             <FormField
                            type="text"
                            placeholder="Email"
                            name="email"
                            register={register}
                            error={errors.email}
                        />

                        <FormField
                            type="password"
                            placeholder="Password"
                            name="password"
                            register={register}
                            error={errors.password}
                        />
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
          </Box>

          <Buttons text='Sign In ' typographyCustomClass='type-signup' customClasses='signup-btn'/>
           </form>


           </Box>
        </Box>

      </Box>

    </Box>
   </Box>
  );
}

export default Login;
