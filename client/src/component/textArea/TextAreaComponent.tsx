import { Stack} from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import React from 'react'
type TextAreaComponent={
    placeholder?:string,
    value?: string,
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) =>void,
    event?: Event

}

function TextAreaComponent(props: TextAreaComponent) {
    const {placeholder,value,handleOnChange}=props

    
    
    return (
        <Stack> 
            <label>Description</label>
            <Textarea placeholder={placeholder} value={value} />
        </Stack>

    )
}

export default TextAreaComponent
