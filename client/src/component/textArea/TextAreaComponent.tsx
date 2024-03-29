import { Stack} from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import React from 'react'
type TextAreaComponent={
    placeholder?:string,
    value?: string,
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) =>void,
    event?: Event,
    description?:string

}

function TextAreaComponent(props: TextAreaComponent) {
    const {placeholder,value,handleOnChange,description}=props

    
    
    return (
        <Stack> 
            <label>{description}</label>
            <Textarea placeholder={placeholder} value={value}  onChange={()=>handleOnChange} />
        </Stack>

    )
}

export default TextAreaComponent
