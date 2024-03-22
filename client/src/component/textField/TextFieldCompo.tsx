import { Paper, Stack, TextField } from '@mui/material'
import React from 'react'
import "./TextFieldcom.css"
type TextFieldProps={
  placeholder?:string,
  value?:string,
  Label?:string,
  Type?:string,
  customClassName?:string

}
function TextFieldCompo(props: TextFieldProps) {
  const {value, placeholder,Label,Type,customClassName}=props
  return (
    <Stack  sx={{
      marginTop:"22px"
    }}>
      <label className='label-input'>{Label}</label>
         <TextField
         placeholder={placeholder}
         value={value}
         type={Type}
         className={customClassName}
         sx={{
          paddingTop:"14px"
         }}
      />
    </Stack>
  )
}

export default TextFieldCompo
