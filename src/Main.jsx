import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

function Main() {
  return (
    <>
      <Box className="main">
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            color: '#DD7210', 
            pt: { xs: 3, sm: 4, md: 8 }, 
            fontSize: { xs: 14, sm: 16 }
          }}
        >
          EXPLORE OUR
        </Typography>
        
        <Typography 
          variant="h3" 
          sx={{ 
            color: 'white', 
            textAlign: 'center', 
            fontWeight: 500,
            fontSize: { xs: 28, sm: 36, md: 54 },
            pt: { xs: 1, sm: 2 },
            px: { xs: 2, sm: 0 }
          }}
        >
          Luxurious Haven Collection
        </Typography>
        
        <Grid 
          container 
          spacing={{ xs: 2, md: 10 }}
          sx={{ 
            pt: { xs: 3, md: 4 },
            px: { xs: 2, sm: 4, md: 8, lg: 12 },
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          {[
            { title: 'Home Decoration', count: '12' },
            { title: 'Office Decoration', count: '40' },
            { title: 'Indoor Decoration', count: '60' },
            { title: 'Outdoor Decoration', count: '10' }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
              <Box 
                className="ops-item"
                sx={{ 
                  position: 'relative',
                  textAlign: { xs: 'center', md: 'left' },
                  py: { xs: 1, md: 0 }
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'gray',
                    fontSize: { xs: 16, sm: 18 },
                    '&:hover': { color: 'white' },
                    transition: 'color 0.3s'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  component="span"
                  sx={{ 
                    color: '#DD7210',
                    fontSize: { xs: 14, sm: 16 },
                    display: { xs: 'block', md: 'inline' },
                    position: { md: 'relative' },
                    top: { md: -20 },
                    pl: { md: 170 },
                    mt: { xs: 1, md: 0 },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {item.count}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Main