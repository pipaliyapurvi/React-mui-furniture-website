import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CheckIcon from '@mui/icons-material/Check';

function About() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#101010',
        backgroundImage: 'url(https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/body-bg.png)',
        py: { xs: 4, md: 8,  },
            mt: -4
      }}
    >
         <Grid container spacing={{ xs: 4, md: 6 }}>
         
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                color: '#DD7210',
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 400,
                fontFamily: 'system-ui',
                mb: 2,
                ml:4
              }}
            >
              HOME DECOR HUB
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontFamily: 'auto',
                fontSize: { 
                  xs: '28px', 
                  sm: '36px', 
                  md: '44px', 
                  lg: '54px' 
                },
                lineHeight: 1.2,
                mb: 3,
                ml:5
              }}
            >
              Exceptional Furniture's For Indoor & Outdoor
            </Typography>

            <Typography
              sx={{
                color: '#A9A9A9',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                fontFamily: 'math',
                mb: 4,
                lineHeight: 1.6,
                ml:5
              }}
            >
              Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit.
            </Typography>
          </Grid>
          </Grid>

      <Container maxWidth="xl">
        
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-02.jpg"
              alt="Furniture display 1"
              sx={{
                width: '100%',
                height: { xs: '250px', sm: '300px', md: '400px', lg: '440px' },
                borderRadius: { xs: '10px', md: '20px' },
                objectFit: 'cover',
             ml:5,
                objectPosition: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg"
              alt="Furniture display 2"
              sx={{
                width: '100%',
                height: { xs: '250px', sm: '300px', md: '400px', lg: '440px' },
                borderRadius: { xs: '10px', md: '20px' },
                objectFit: 'cover',
                    ml:5,
                objectPosition: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          </Grid>
        </Grid>

       
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontFamily: 'auto',
                fontSize: { xs: '24px', sm: '30px', md: '36px', lg: '42px' },
                mb: 3,
              }}
            >
              Discover Endless Designs
            </Typography>

            <Typography
              sx={{
                color: '#A9A9A9',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                fontFamily: 'math',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Typography>

           
            <Box>
              {[
                'At eleifend mattis ligula, porta finibus urna gvida at.',
                'Kenean vehicula sodales arcu non mattis.',
                'Ginteger dapibus ac dui pretium blanss aptent.'
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 2.5,
                    p: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: '#DD7210',
                      fontSize: { xs: '20px', md: '24px' },
                      mr: 2,
                      mt: 0.5,
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#A9A9A9',
                      fontSize: { xs: '16px', sm: '18px' },
                      fontFamily: 'math',
                      lineHeight: 1.4,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
       
      </Container>
    </Box>
  );
}

export default About;

// import Box from '@mui/material/Box'
// import React from 'react'
// import Typography from '@mui/material/Typography'
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import CheckIcon from '@mui/icons-material/Check';




// function About() {
//     return (
//         <>
//             <Box className="about">
//                 <Box sx={{ width: '100%' }}>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid size={6} className="grid-1">
//                             <Typography variant="h6" >HOME DECOR HUB</Typography>
//                             <Typography variant="h2">Exceptional Furniture's For Indoor &Amp; Outdoor</Typography>
//                             <Typography variant="h5" >Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</Typography>
//                             <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-02.jpg" alt="" />
//                         </Grid>
//                         <Grid size={6} className="grid-2">
//                             <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg" alt="" />
//                             <Typography variant="h5">Discover Endless Designs</Typography>
//                             <Typography variant="h6">Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis.</Typography>
//                             <Typography className='iconn'>
//                                 <CheckIcon></CheckIcon>
//                                 <Typography variant="h4">At eleifend mattis ligula, porta finibus urna gvida at.</Typography>
//                             </Typography>
//                             <Typography className='iconn'>
//                                 <CheckIcon></CheckIcon>
//                                 <Typography variant="h4">Kenean vehicula sodales arcu non mattis.</Typography>
//                             </Typography>
//                             <Typography className='iconn'>
//                                 <CheckIcon></CheckIcon>
//                                 <Typography variant="h4">Ginteger dapibus ac dui pretium blanss aptent.</Typography>
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Box>


//             </Box>

//         </>
//     )
// }

// export default About
