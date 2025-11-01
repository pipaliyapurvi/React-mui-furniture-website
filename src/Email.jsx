import React from 'react';
import './App.css'; // Import the CSS for styling
import Typography from '@mui/material/Typography';



function Email() {
    return (
        <>
            <section className="email-section">
                <div className="email-container">
                    <Typography variant="h6">ART OF COMFORT</Typography>
                    <Typography variant="h2" gutterBottom>Transforming Spaces,<br /> Transforming Style</Typography>
                    <form className="email-form">
                        <input type="email" placeholder="Enter your mail id here" />

                    </form>
                </div>
            </section>

        </>
    );
}

export default Email;
