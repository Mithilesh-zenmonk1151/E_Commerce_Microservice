import { Box, Stack } from '@mui/material'
import React from 'react'
import easeLogo from "../../assets/easelogoo.jpg"
function HeaderLayout() {
    return (
        <Stack>
            <Box>
            <img src={easeLogo} alt='easeLogo'/>
            </Box>

        </Stack>
    )
}

export default HeaderLayout
