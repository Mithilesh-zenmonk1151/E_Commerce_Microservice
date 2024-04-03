import { FC } from "react"
import HeaderBreadcrumb from "../../../../component/hederBreadcrumb/HeaderBreadcrumb"
import { Box,  Button,  IconButton, Stack } from "@mui/material"
import Buttons from "../../../../component/button/Button"
import { Link } from "react-router-dom"
import TypographyCompo from "../../../../component/typography/TypographyCompo"
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

interface PropsType {
    setView: any
}


const AllProductHeader = (props: PropsType) => {
    
   
    return (
        <Box display="flex" justifyContent="space-between">
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'157px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'All Products'} breadcrumb = {[{text: 'Home', link : '/'}]}/>
            <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
                <Link to={'/allproducts/addProduct'}><Buttons  text={'ADD NEW PRODUCT'}  
               
                />
                </Link>
                <Stack direction={'row'} alignItems={'center'}>
                    {/* <Switch onChange={(event) => {
                        props.setView(event.target.checked)
                    }} /> */}
                    <IconButton onClick={()=> {
                        props.setView(false);
                    }}><ViewListIcon/></IconButton>
                    <IconButton onClick={()=> {
                        props.setView(true);
                    }}><GridViewIcon/></IconButton>
                </Stack>
            </Box>
        </Box>
    )
}

export default AllProductHeader