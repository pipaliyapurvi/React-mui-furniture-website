import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

function Hovercard() {
    return (
        <>
            <Box sx={{ width: '100%' }} className="hoverimg">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} md={3} className="img-container">
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-01.jpg" alt="Brown Donkey" />
                        <Box className="hover-text">
                            <Typography variant="h6" sx={{ 
                                color: 'white', 
                                fontWeight: 700,
                                textAlign: 'center',
                                margin: 0
                            }}>
                                Brown Donkey
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="img-container">
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-02.jpg" alt="Baletic" />
                        <Box className="hover-text">
                            <Typography variant="h6" sx={{ 
                                color: 'white', 
                                fontWeight: 700,
                                textAlign: 'center',
                                margin: 0
                            }}>
                                Baletic
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="img-container">
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-03.jpg" alt="Maskan" />
                        <Box className="hover-text">
                            <Typography variant="h6" sx={{ 
                                color: 'white', 
                                fontWeight: 700,
                                textAlign: 'center',
                                margin: 0
                            }}>
                                Maskan
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="img-container">
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-05.jpg" alt="Saltwater" />
                        <Box className="hover-text">
                            <Typography variant="h6" sx={{ 
                                color: 'white', 
                                fontWeight: 700,
                                textAlign: 'center',
                                margin: 0
                            }}>
                                Saltwater
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Hovercard