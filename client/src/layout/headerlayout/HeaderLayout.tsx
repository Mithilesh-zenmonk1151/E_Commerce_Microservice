import { Box, Stack } from '@mui/material'
import React from 'react'
import SearchBar from '../../component/searchBar/SearchBar'
import Calender from '../../component/calender/Calender'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatars from '../../component/avatar/AvatarI';
function HeaderLayout() {
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            width:"100%",
            bgcolor:"#ffffff",
            height:"50px",
        }}>
            <Box>
                <SearchBar/>
            </Box>
            <Box sx={{
                display:"flex",
                gap:"60px"
            }}>
                <Calender/>
                <NotificationsIcon height={"42px"}/>
                <Avatars/>
            </Box>

        </Box>
    )
}

export default HeaderLayout
