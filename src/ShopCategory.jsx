import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ShopCategory() {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

    const defaultImage = "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-01.jpg";
    const images = {
        bedroom: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-02.jpg",
        office: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-03.jpg",
        dining: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-04.jpg",
        kitchen: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-05.jpg",
        furniture: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-06.jpg",
    };

    const categories = [
        { id: null, name: '01 Living Room' },
        { id: 'bedroom', name: '02 BedRoom' },
        { id: 'office', name: '03 Home Office' },
        { id: 'dining', name: '04 Dining Room' },
        { id: 'kitchen', name: '05 Kitchen Room' },
        { id: 'furniture', name: '06 Balcony Furniture' },
    ];

    return (
        <Box className="shop" sx={{ 
            padding: { xs: 2, sm: 3, md: 4 },
            minHeight: { xs: 'auto', md: '740px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Box sx={{ 
                textAlign: 'center',
                mb: { xs: 3, md: 6 }
            }}>
                <Typography variant="h6">ONE-STOP SHOP</Typography>
                <Typography variant="h2" gutterBottom>Shop By Category</Typography>
            </Box>

            <Grid container spacing={isMobile ? 4 : 6} alignItems="flex-start">
                {/* Text Column - Always comes first in DOM */}
                <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                    {categories.map((category, index) => (
                        <Box key={index} sx={{ position: 'relative' }}>
                            <Box 
                                sx={{ 
                                    borderBottom: '1px solid #5e5e5e',
                                    width: '100%',
                                    mb: 1
                                }}
                            />
                            <Typography
                                variant={isMobile ? "h5" : "h4"}
                                onMouseEnter={() => setHoveredCategory(category.id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                                onClick={() => isMobile && setHoveredCategory(
                                    hoveredCategory === category.id ? null : category.id
                                )}
                                sx={{ 
                                    cursor: 'pointer',
                                    py: { xs: 1.5, md: 2 },
                                    px: { xs: 2, md: 4 },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#5e5e5e',
                                        backgroundColor: isMobile ? 'transparent' : 'rgba(255,255,255,0.05)',
                                    },
                                    ...(hoveredCategory === category.id && {
                                        color: '#5e5e5e',
                                        backgroundColor: isMobile ? 'transparent' : 'rgba(255,255,255,0.05)',
                                    })
                                }}
                            >
                                {category.name}
                            </Typography>
                        </Box>
                    ))}
                </Grid>

                {/* Image Column - Comes after text on mobile */}
                <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
                    <Box sx={{ 
                        pl: { md: 4 },
                        pt: { xs: 2, md: 0 },
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{
                            width: '100%',
                            maxWidth: { xs: '100%', md: '600px' },
                            mx: 'auto'
                        }}>
                            <img
                                src={hoveredCategory ? images[hoveredCategory] : defaultImage}
                                alt="Category"
                                style={{ 
                                    width: '100%',
                                    height: isMobile ? '300px' : isTablet ? '400px' : '495px',
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                    transition: 'opacity 0.3s ease'
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopCategory;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// function ShopCategory() {
//     const [hoveredCategory, setHoveredCategory] = useState(null);

//     const defaultImage = "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-01.jpg";
//     const images = {
//         bedroom: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-02.jpg",
//         office: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-03.jpg",
//         dining: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-04.jpg",
//         kitchen: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-05.jpg",
//         furniture: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-06.jpg",
//     };

//     return (
//         <Box className="shop" sx={{ padding: 4 }}>
//             <Typography variant="h6">ONE-STOP SHOP</Typography>
//             <Typography variant="h2" gutterBottom>Shop By Category</Typography>

//             <Grid container spacing={6} alignItems="flex-start">
//                 {/* Text Column */}
//                 <Grid item xs={12} md={6}>
//                     <Typography className='border'> </Typography>
//                     <Typography variant="h4">01 Living Room</Typography>
//                     <Typography className='border'> </Typography>
//                     <Typography
//                         variant="h4"
//                         onMouseEnter={() => setHoveredCategory('bedroom')}
//                         onMouseLeave={() => setHoveredCategory(null)}
//                         sx={{ cursor: 'pointer' }}
//                     >
//                         02 BedRoom
//                     </Typography>
//                     <Typography className='border'> </Typography>
//                     <Typography
//                         variant="h4"
//                         onMouseEnter={() => setHoveredCategory('office')}
//                         onMouseLeave={() => setHoveredCategory(null)}
//                         sx={{ cursor: 'pointer' }}
//                     >
//                         03 Home Office
//                     </Typography>
//                     <Typography className='border'> </Typography>
//                     <Typography
//                         variant="h4"
//                         onMouseEnter={() => setHoveredCategory('dining')}
//                         onMouseLeave={() => setHoveredCategory(null)}
//                         sx={{ cursor: 'pointer' }}
//                     >
//                         04 Dining Room
//                     </Typography>
//                     <Typography className='border'> </Typography>
//                     <Typography
//                         variant="h4"
//                         onMouseEnter={() => setHoveredCategory('kitchen')}
//                         onMouseLeave={() => setHoveredCategory(null)}
//                         sx={{ cursor: 'pointer' }}
//                     >
//                         05 Kitchen Room
//                     </Typography>
//                     <Typography className='border'> </Typography>
//                     <Typography
//                         variant="h4"
//                         onMouseEnter={() => setHoveredCategory('furniture')}
//                         onMouseLeave={() => setHoveredCategory(null)}
//                         sx={{ cursor: 'pointer' }}
//                     >
//                         06 Balcony Furniture

//                     </Typography>
//                     <Typography className='border'> </Typography>
//                 </Grid>

//                 {/* Image Column */}
//                 <Grid item xs={12} md={6}>
//                     <Box sx={{ pl: { md: 4 }, pt: { xs: 4, md: 0 } }}>
//                         <img
//                             src={hoveredCategory ? images[hoveredCategory] : defaultImage}
//                             alt="Category"
//                             style={{ width: '100%', height: '495px', objectFit: 'cover', borderRadius: 8 }}
//                         />
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

// export default ShopCategory;
