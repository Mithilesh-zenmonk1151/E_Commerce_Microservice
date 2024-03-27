import { Box, Stack } from '@mui/material'
import React from 'react'
import "./HeaderUser.css"
import SearchBar from '../../component/searchBar/SearchBar'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatars from '../../component/avatar/AvatarI';
function HeaderLayout() {
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            width:"100%",
            bgcolor:"#efeff",
            height:"50px",
            paddingTop:"20px"
        }}>
            <Box>
              
            </Box>
            <Box sx={{
                display:"flex",
                gap:"60px"
            }}>
                  <SearchBar/>
               
                <NotificationsIcon height={"42px"}/>
                <Avatars customClass='avatar-class'/>
            </Box>

        </Box>
    )
}

export default HeaderLayout
