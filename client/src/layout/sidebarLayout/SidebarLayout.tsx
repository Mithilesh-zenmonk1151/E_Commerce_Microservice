import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import easeLogo from "../../assets/easelogoo.jpg";
import "./sidebar.css"
import Buttons from "../../component/button/Button";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DropDown from "../../component/dropDown/DropDown";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
function SidebarLayout() {
  return (
    <Stack>
      <Box sx={{
        display:"flex",
        gap:"10px"
      }}>
     
       
          <img src={easeLogo} alt="logoEase" className="sidebar-logo" />
       
        <Typography sx={{
            fontFamily:"sans-serif",
            fontWeight:"900",
            fontSize:"23px"
        }}>Flight Ease</Typography>
      </Box>
       <Box sx={{
        
       }}>
        <Buttons src={<DashboardIcon/>} text="fwerw"/>
        {/* <Buttons/>
        <Buttons/> */}
        <DropDown src={<AssignmentTurnedInIcon/>} text="All tickets" option1Logo={<OpenInNewIcon/>} option2Logo={<EventAvailableIcon/>} option3Logo={<HighlightOffIcon/>} option1="hello" option2="hello2" option3="hee3" />
        <DropDown text="Chatbots" src={<ChatBubbleOutlineIcon/>}  option1="Create a Chatbot" option1Logo={<AddIcon/>} />
       </Box>
    </Stack>
  );
}

export default SidebarLayout;
