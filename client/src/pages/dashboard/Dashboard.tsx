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
            height:"105vh"

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
                margin:"20px",
                padding:"25px",
                width:"90%",
                fontSize:"28px"
            }}>
                <TypographyCompo heading='Settings' body='Manage your account settings'  customClassName='setting-manage'/>
                <Box sx={{
                    display:"flex",
                    gap:"16px"

                }}>
                    <Buttons text='Save change' customClasses='save-btn' typographyCustomClass='typo-save' />
                    <Buttons text='Cancel' customClasses='cancel-btn' typographyCustomClass='typo-cancel'/>
                </Box>
            </Box>
            <Box sx={{
              

            }}>
            <DashBoardHero/>
            </Box>

            </Box>
            
        </Stack>
    )
}

export default Dashboard
