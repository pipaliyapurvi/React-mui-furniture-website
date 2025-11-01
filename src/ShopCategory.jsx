import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function ShopCategory() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const defaultImage = "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-01.jpg";
    const images = {
        bedroom: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-02.jpg",
        office: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-03.jpg",
        dining: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-04.jpg",
        kitchen: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-05.jpg",
        furniture: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-06.jpg",
    };

    return (
        <Box className="shop" sx={{ padding: 4 }}>
            <Typography variant="h6">ONE-STOP SHOP</Typography>
            <Typography variant="h2" gutterBottom>Shop By Category</Typography>

            <Grid container spacing={6} alignItems="flex-start">
                {/* Text Column */}
                <Grid item xs={12} md={6}>
                    <Typography className='border'> </Typography>
                    <Typography variant="h4">01 Living Room</Typography>
                    <Typography className='border'> </Typography>
                    <Typography
                        variant="h4"
                        onMouseEnter={() => setHoveredCategory('bedroom')}
                        onMouseLeave={() => setHoveredCategory(null)}
                        sx={{ cursor: 'pointer' }}
                    >
                        02 BedRoom
                    </Typography>
                    <Typography className='border'> </Typography>
                    <Typography
                        variant="h4"
                        onMouseEnter={() => setHoveredCategory('office')}
                        onMouseLeave={() => setHoveredCategory(null)}
                        sx={{ cursor: 'pointer' }}
                    >
                        03 Home Office
                    </Typography>
                    <Typography className='border'> </Typography>
                    <Typography
                        variant="h4"
                        onMouseEnter={() => setHoveredCategory('dining')}
                        onMouseLeave={() => setHoveredCategory(null)}
                        sx={{ cursor: 'pointer' }}
                    >
                        04 Dining Room
                    </Typography>
                    <Typography className='border'> </Typography>
                    <Typography
                        variant="h4"
                        onMouseEnter={() => setHoveredCategory('kitchen')}
                        onMouseLeave={() => setHoveredCategory(null)}
                        sx={{ cursor: 'pointer' }}
                    >
                        05 Kitchen Room
                    </Typography>
                    <Typography className='border'> </Typography>
                    <Typography
                        variant="h4"
                        onMouseEnter={() => setHoveredCategory('furniture')}
                        onMouseLeave={() => setHoveredCategory(null)}
                        sx={{ cursor: 'pointer' }}
                    >
                        06 Balcony Furniture

                    </Typography>
                    <Typography className='border'> </Typography>
                </Grid>

                {/* Image Column */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ pl: { md: 4 }, pt: { xs: 4, md: 0 } }}>
                        <img
                            src={hoveredCategory ? images[hoveredCategory] : defaultImage}
                            alt="Category"
                            style={{ width: '100%', height: '495px', objectFit: 'cover', borderRadius: 8 }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopCategory;
