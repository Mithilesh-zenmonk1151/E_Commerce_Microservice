import { Box, Stack } from '@mui/material'
import React from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TypographyText from '../typography/TypographyCompo';
import styles from './DragDrop.module.css'

interface DragDropProps {
    file?: any
}
function DragDrop(props: DragDropProps) {
    return (
        <Stack className={styles.dotted} p={2} gap={1}  justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}  >
            <ImageOutlinedIcon sx={{ fontSize: '50px' }} />
            <Stack  alignItems={'center'}>{}
                <TypographyText customClassName='drop-class' heading={'Drop your images here, or browse'}  />
                <TypographyText heading={'Jpeg, png are allowed'}  />
            </Stack>

        </Stack>
    )
}

export default DragDrop