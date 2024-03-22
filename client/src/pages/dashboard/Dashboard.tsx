import React from 'react'
import Buttons from '../../component/button/Button'
import SidebarLayout from '../../layout/sidebarLayout/SidebarLayout'
import HeaderLayout from '../../layout/headerlayout/HeaderLayout'
import {  Box, Stack } from '@mui/material'
import "./Dashboard.css"
import TypographyCompo from '../../component/typography/TypographyCompo'
import DashBoardHero from './dashboardHero/DashBoardHero'
import TextFieldCompo from '../../component/textField/TextFieldCompo'

function Dashboard() {
    return (
        <Stack sx={{
            display:"flex",
            flexDirection:"row",
            mt:"20px",
            bgcolor:"#f6f8ff",
            height:"100vh"

        }}>
            <SidebarLayout/>
             <Box sx={{
               width:"100%"
            }}> 
            <Box sx={{
                width:"100%"
            }}>
            <HeaderLayout/>
            </Box>
            {/* <Box> */}
            {/* </Box> */}
            {/* </Box> */}
            <Box sx={{
                
                mt:"20px",
                display:"flex",
                justifyContent:"space-between",
                margin:"20px"
            }}>
                <TypographyCompo heading='Setting' body='Manage your account settings'/>
                <Box sx={{
                    display:"flex",

                }}>
                    <Buttons text='Save change' customClasses='save-btn' />
                    <Buttons text='Cancel' customClasses='cancel-btn'/>
                </Box>
            </Box>
            <Box>
            <DashBoardHero/>
            <TextFieldCompo/>
            </Box>

            </Box>
            
        </Stack>
    )
}

export default Dashboard
