import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function About() {
    return (
        <>
            <Box className="about">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={6}>
                            <Typography variant="h6" >WE DESIGN</Typography>
                        </Grid>
                        <Grid size={6}>

                        </Grid>

                    </Grid>
                </Box>


            </Box>

        </>
    )
}

export default About
