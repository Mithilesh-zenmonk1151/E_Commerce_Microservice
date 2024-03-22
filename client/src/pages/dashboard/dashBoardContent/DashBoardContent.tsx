import { Box, Stack, Typography} from '@mui/material'
import React, { useState } from 'react'
import TypographyCompo from '../../../component/typography/TypographyCompo'
import Avatars from '../../../component/avatar/AvatarI'
import "./DashboardContent.css"
import Buttons from '../../../component/button/Button'
import TextFieldCompo from '../../../component/textField/TextFieldCompo'

function DashBoardContent() {
  const [userName,setUserName]=useState("");
  return (
    <Stack sx={{
      paddingTop:"42px"
    }}>
      <Box>
        <TypographyCompo heading='General Information' body="Lorem ipsum dolor sit amet consectetur"/>
        <Box>
          <Typography sx={{
            fontSize:"16px",
            fontWeight:"700",
            fontFamily:"Inter",
            lineHeight:"22px",
            marginTop:"30px",

          }}>Profile Picture</Typography>
          <Box sx={{
            display:"flex"
          }}>
          <Avatars customClass='profile-avatar' />
           <Box sx={{
            display:"flex",
            gap:"20px",
            marginTop:"30px",
            paddingTop:"10px",
            paddingRight:"20px",
           }}>
            <Buttons text='Change' customClasses='change-btn' typographyCustomClass='typo-graphy'/>
            <Buttons text='Delete' customClasses='delete-btn' typographyCustomClass='typo-delete'/>
           </Box>

          </Box>
        </Box>
      </Box>
      <Box sx={{
        display:"grid",
        gridTemplateColumns:"auto auto",
         gap:"32px",
         paddingTop:"45px"
      }}>
        <TextFieldCompo placeholder='Sam' value={userName} Label='Username' Type='text' customClassName='profile-inputs' />
        <TextFieldCompo placeholder='xyz@gmail.com' value={userName} Label='Email Address' Type='text' customClassName='profile-inputs' />
        <TextFieldCompo placeholder='123-098-345-09' value={userName} Label='Phone Number' Type='text' customClassName='profile-inputs'/>
        <TextFieldCompo placeholder='1238' value={userName} Label='Fax' Type='text'customClassName='profile-inputs' />
        <TextFieldCompo placeholder='xyz' value={userName} Label='Address' Type='text' customClassName='profile-inputs'/>
        <TextFieldCompo placeholder="country" value={userName} Label='Country' Type='text' customClassName='profile-inputs'/>
        <TextFieldCompo placeholder='dfg' value={userName} Label='City' Type='text' customClassName='profile-inputs'/>
        <TextFieldCompo placeholder='kjgf' value={userName} Label='State' Type='text' customClassName='profile-inputs'/>
      </Box>
    </Stack>
  )
}

export default DashBoardContent
