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
        <Box className="shop" sx={{ padding: 2 }}>
            <Typography variant="h6">ONE-STOP SHOP</Typography>
            <Typography variant="h2" gutterBottom>Shop By Category</Typography>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='border'> </Typography>
                    <Typography variant="h4"> 01 Living Room</Typography>
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
                    
                </Grid>

                <Grid item xs={6}>
                    <img
                        src={hoveredCategory ? images[hoveredCategory] : defaultImage}
                        alt="Category"
                        style={{ width: '90%', height: '495px' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopCategory;




// import Box from '@mui/material/Box'
// import React from 'react'
// import Typography from '@mui/material/Typography'
// import Grid from '@mui/material/Grid';




// function ShopCategory() {
//     return (
//         <>
//             <Box className="shop">
//                 <Typography variant="h6">ONE-STOP SHOP</Typography>
//                 <Typography variant="h2">Shop By Category</Typography>


//                 <Box sx={{ width: '100%' }}>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                         <Grid size={6}>
//                             <Typography className='border'></Typography>
//                             <Typography variant="h4"> 01 Living Room</Typography>
//                             <Typography className='border'></Typography>
//                             <Typography variant="h4" className='bedroom'> 02 BedRoom</Typography>
//                             <Typography className='border'></Typography>
//                             <Typography variant="h4"> 03 Home Office</Typography>
//                             <Typography className='border'></Typography>
//                             <Typography variant="h4"> 04 Dining Room</Typography>
//                             <Typography className='border'></Typography>
//                             <Typography variant="h4"> 05 Kitchen Room</Typography>
//                             <Typography className='border'></Typography>
//                             <Typography variant="h4"> 06 Balcony Furniture</Typography>
//                         </Grid>
//                         <Grid size={6}>
//                             <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-01.jpg" alt="" />

//                         </Grid>
//                     </Grid>


//                 </Box>
//             </Box>

//         </>
//     )
// }

// export default ShopCategory
