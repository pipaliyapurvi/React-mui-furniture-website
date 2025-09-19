import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';




function About() {
    return (
        <>
            <Box className="about">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={6} className="grid-1">
                            <Typography variant="h6" >HOME DECOR HUB</Typography>
                            <Typography variant="h2">Exceptional Furniture's For Indoor &Amp; Outdoor</Typography>
                            <Typography variant="h5" >Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</Typography>
                            <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-02.jpg" alt="" />
                        </Grid>
                        <Grid size={6} className="grid-2">
                            <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg" alt="" />
                            <Typography variant="h5">Discover Endless Designs</Typography>
                            <Typography variant="h6">Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis.</Typography>
                            <Typography className='iconn'>
                                <CheckIcon></CheckIcon>
                                <Typography variant="h4">At eleifend mattis ligula, porta finibus urna gvida at.</Typography>
                            </Typography>
                            <Typography className='iconn'>
                                <CheckIcon></CheckIcon>
                                <Typography variant="h4">Kenean vehicula sodales arcu non mattis.</Typography>
                            </Typography>
                            <Typography className='iconn'>
                                <CheckIcon></CheckIcon>
                                <Typography variant="h4">Ginteger dapibus ac dui pretium blanss aptent.</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


            </Box>

        </>
    )
}

export default About
