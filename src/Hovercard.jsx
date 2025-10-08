import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

function Hovercard() {
    return (
        <>
            <Box sx={{ width: '100%' }} className="hoverimg">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5 }}>
                    <Grid size={3} className="img-container">
                        <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-01.jpg" alt="" />
                        <Box className="hover-text">Brown Donkey</Box>
                    </Grid>
                    <Grid size={3} className="img-container">
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-02.jpg" alt="" />
                        <Box className="hover-text">Baletic</Box>
                    </Grid>
                    <Grid size={3} className="img-container">
                        <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-03.jpg" alt="" />
                        <Box className="hover-text">Maskan</Box>
                    </Grid>
                    <Grid size={3} className="img-container">
                        <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-05.jpg" alt="" />
                        <Box className="hover-text">Saltwater</Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Hovercard
