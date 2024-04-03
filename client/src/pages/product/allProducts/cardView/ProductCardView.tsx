import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import AddProductCard from '../../../../component/addProductCard/AddProductCaed'

export default function ProductCardView() {
    return (
        <Stack gap={1}>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gap={1}>
                <AddProductCard />
            </Box>
            <Pagination count={10} shape="rounded" />
        </Stack>

    )
}