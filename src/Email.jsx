import React from 'react';
import './App.css'; // Import the CSS for styling
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';

function Email() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <>
            <section className="email-section">
                <div className="email-container">
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontSize: { xs: '14px', sm: '16px' },
                            mb: { xs: 1, sm: 2 }
                        }}
                    >
                        ART OF COMFORT
                    </Typography>
                    <Typography 
                        variant="h2" 
                        gutterBottom
                        sx={{ 
                            fontSize: { 
                                xs: '24px', 
                                sm: '32px', 
                                md: '42px' 
                            },
                            mb: { xs: 3, sm: 4, md: 6 }
                        }}
                    >
                        Transforming Spaces,<br /> Transforming Style
                    </Typography>
                    <form className="email-form">
                        <input 
                            type="email" 
                            placeholder="Enter your mail id here" 
                        />
                    </form>
                </div>
            </section>
        </>
    );
}

export default Email;

// import React from 'react';
// import './App.css'; // Import the CSS for styling
// import Typography from '@mui/material/Typography';



// function Email() {
//     return (
//         <>
//             <section className="email-section">
//                 <div className="email-container">
//                     <Typography variant="h6">ART OF COMFORT</Typography>
//                     <Typography variant="h2" gutterBottom>Transforming Spaces,<br /> Transforming Style</Typography>
//                     <form className="email-form">
//                         <input type="email" placeholder="Enter your mail id here" />

//                     </form>
//                 </div>
//             </section>

//         </>
//     );
// }

// export default Email;
