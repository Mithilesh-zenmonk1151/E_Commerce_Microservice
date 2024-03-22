import { Paper, Stack, TextField } from '@mui/material'
import React from 'react'
type TextFieldProps={
  placeholder?:string,
  value?:string

}
function TextFieldCompo(props: TextFieldProps) {
  const {value, placeholder}=props
  return (
    <Stack>
         <TextField
         placeholder={placeholder}
         value={value}
      />
    </Stack>
  )
}

export default TextFieldCompo
