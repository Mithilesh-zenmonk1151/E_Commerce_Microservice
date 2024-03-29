import { Box } from "@mui/material";
import { FC } from "react";
import AddProductHeader from "./addProductHeader/AddProductHeader";
import AddProductMain from "./addProductMain/AddProductMain";
import AddProductSidebar from "./addProductSidebar.tsx/AddProductSidebar";
import SidebarLayout from "../../../layout/sidebarLayout/SidebarLayout";

const AddProduct: FC=()=>{
    return (
        <Box sx={{
            bgcolor:"#f7f7ff",
            display:"flex",
            height:"121vh",
            paddingRight:0,
            padding:0
        }}>
            {/* <AddProductSidebar/> */}
            <SidebarLayout/>
            <Box sx={{
                display:"flex",
                flexDirection:"column"
            }}>
            <AddProductHeader/>
            <AddProductMain/>
            </Box>
        </Box>
    )
}
export default AddProduct