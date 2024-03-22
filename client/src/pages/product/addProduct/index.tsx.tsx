import { Box } from "@mui/material";
import { FC } from "react";
import AddProductHeader from "./addProductHeader/AddProductHeader";
import AddProductMain from "./addProductMain/AddProductMain";
import AddProductSidebar from "./addProductSidebar.tsx/AddProductSidebar";

const AddProduct: FC=()=>{
    return (
        <Box sx={{
            bgcolor:"#f6f8ff",
            display:"flex"
        }}>
            <AddProductSidebar/>
            <Box>
            <AddProductHeader/>
            <AddProductMain/>
            </Box>
        </Box>
    )
}
export default AddProduct