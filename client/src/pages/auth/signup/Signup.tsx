import React, { useState } from 'react';
import "./Signup.css"
import { Box, Typography } from '@mui/material';
import HeaderLayout from './headerLayout/HeaderLayout';
import signupLogo from "../../../assets/singupPic.png"
import TextFieldCompo from '../../../component/textField/TextFieldCompo';
import Buttons from '../../../component/button/Button';
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch,useAppSelector } from '../../../redux/store/hooks';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../redux/slice/authSlice/auth.action';
import {FormData, UserSchema} from './type';
import FormField from '../../../component/formField/FormField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// type signupType = {
//   role: String;
//   name: String;
//   email: String;
//   password: String;
// };
const Signup = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  console.log("emaildsgf",email)
  console.log("password", password);
  console.log("confirmPassword",confirmPassword);
//  const dispatch= useAppDispatch();
//  const navigate= useNavigate();
//  const signup = useAppSelector((state) => state?.signup?.content)
  // const error = useAppSelector((state) => state?.signup?.error)

//  const data={
//   email,
//   password,
//   confirmPassword
//  }
//  const [user, setUser] = useState<signupType>({
//   role: "",
//   name: "",
//   email: "",
//   password: "",
// });
//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   // }
// //  e{ els
// //     navigate('/login')
//   }
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  interface FormData {

    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const response = await dispatch(createUser(data));
      if (response.payload) navigate("/Login");
    } catch (error) {
      // Handle error
      console.error("Failed to create user:", error);
    }
  };
  
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
          height:"635px"
        }}>
        <img src={signupLogo} alt='signup' className='signup-logo'/>
        <Box sx={{
          bgcolor:"white",
          padding:"30px"
        }}>
          <form  onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h4' sx={{
            fontFamily:"Roboto",
            fontSize:"30px",
            fontWeight:"500"
          }}>Create Your Free Account</Typography>
         <Box sx={{
          display:"flex",
          flexDirection:"column",
          gap:"1px",
         }}>
         <Box> 
            {/* <TextFieldCompo setValue={setEmail}  Label='Your email' placeholder='Enter your email id here' value={email} Type='email'/>
            <TextFieldCompo setValue={setPassword} Label='Password' placeholder='.........'   value={password}   Type='password'/>
            <TextFieldCompo setValue={setConfirmPassword} Label='Confirm Password' placeholder='..........'  value={confirmPassword} Type='password'/> */}
             <FormField
              type="text"
              placeholder="Name"
              name="name"
              register={register}
              error={errors.fullName}
            />

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

            <FormField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            />
             <select
              {...register("role")}
              style={{
                margin: "10px",
                border: "1px solid transparent",
                padding: "10px",
              }}
            >
              <option value="USER">USER</option>
              <option value="VENDOR">VENDOR</option>
              <option value="ADMIN">ADMIN</option>
            </select>
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
