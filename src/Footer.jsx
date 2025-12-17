
import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <Box className="footer" sx={{ color: '#fff', py: 6, px: 4 }}>
            <Grid container spacing={4}>
                {/* Part 1: About */}
                <Grid item xs={12} sm={6} md={2}>
                    <img src="	https://wdtteapoy.wpengine.com/wp-content/themes/teapoy/assets/images/light-logo.svg" alt="" />

                    <Typography variant="h6" sx={{ fontFamily: 'serif' }}>
                        Proin a interdum elit. Etiam eu sapien sem.<br /> Suspendisse a massa justo. Cras eget lorem<br /> nunc. Fusce nec urna tempus tempus.
                    </Typography>
                    <Box className="footericon" sx={{ display: 'flex', marginTop: '30px', gap: '15px' }}>
                        <Box className="footericon-1"><WhatsAppIcon /></Box>
                        <Box className="footericon-2"><InstagramIcon /></Box>
                        <Box className="footericon-3"><FacebookIcon /></Box>
                        <Box className="footericon-4"><YouTubeIcon /></Box>
                        <Box className="footericon-5"><XIcon /></Box>


                    </Box>
                </Grid>

                {/* Part 2: Useful Links */}
                <Grid item xs={12} sm={6} md={4} sx={{ marginLeft: '20px' }} >
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Useful Links
                    </Typography>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>History</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Our Team</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Privacy Policy</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Services Offered</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Product Catalog</Link>
                </Grid>
                {/* Part 3: Information */}
                <Grid item xs={12} sm={6} md={2.4} sx={{ marginLeft: '20px' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Information
                    </Typography>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>FAQ / Return</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Privacy / Terms</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Affiliate</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Sizing Guide</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Accessibility</Link>
                </Grid>
                {/* Part 4: Support */}
                <Grid item xs={12} sm={6} md={2.4} sx={{ marginLeft: '20px' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Support
                    </Typography>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Your Account</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Press Release</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Return Centre</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>App Download</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Advertisements</Link>
                </Grid>
                {/* Part 5: Social Media */}
                <Grid item xs={12} sm={6} md={4} >
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Follow Us @Instagram
                    </Typography>

                    <Box
                        className="footerimg"
                        sx={{
                            display: 'flex',
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-01.jpg"
                            alt="Instagram 1"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-02.jpg"
                            alt="Instagram 2"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-03.jpg"
                            alt="Instagram 3"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                    </Box>
                    <Box
                        className="footerimg"
                        sx={{
                            display: 'flex',
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        <img
                            src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-04.jpg"
                            alt="Instagram 1"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-05.jpg"
                            alt="Instagram 2"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-06.jpg"
                            alt="Instagram 3"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;
