import * as React from "react";

import Stack from "@mui/material/Stack";
import { Box, Button, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
type ButtonProps = {
  text?: string;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement, MouseEvent>) => void;
  //   disabled: Boolean;
  outline?: Boolean,
  customClasses?: string,
  type?: 'submit',
  src?: React.ReactElement,
  alt?: string,
  bgColor?:string ,
  typographyCustomClass?:string,
  customClssSrc?:string
};

function Buttons(props: ButtonProps) {
    const {typographyCustomClass,text,handleOnClick,src,customClasses,bgColor,type,customClssSrc}=props
  console.log("props: ", props);
  return (
    <Stack direction="row" spacing={2}>
      <Button className={customClasses}  onClick={handleOnClick} type={type}>
       {/* <img src={src} alt={alt} />yuty {text} */}
       <Box sx={{
        display:"flex",
        textTransform:"none",
        color:"black"
       }}>
       <Box className={customClssSrc}  >
       {src}
       </Box>
        <Typography sx={{
          fontFamily:"Inter",
          
        }} className={typographyCustomClass}>
        {text}

        </Typography>

       </Box>
        
      </Button>
    </Stack>
  );
}

// export default Buttons;
// import { Button, Typography } from '@mui/material'
// import React from 'react'
// type ButtonProps ={
//     text: string,
//     icon : any,
//     handleOnClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
//     // handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
// }
// const Buttons = (props: ButtonProps) => {
//   return (
//    <Button  >{props.icon} <Typography sx={{textTransform:"none",color:"black", marginLeft:"5px",fontFamily:"poppins",fontWeight:500, fontSize:"17.39px", lineHeight:"26.09px"}}>{props.text}</Typography></Button>
//   )
// }
export default Buttons;
