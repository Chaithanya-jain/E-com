import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import backgroundImage from './shop.jpg';

const About = () => {
  return (
    <>
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          margin: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          p: 4,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: { xs: 24, sm: 28, md: 34 }, mb: 2 }}
            color="text.secondary"
            variant="h2"
            gutterBottom
          >
            ABOUT US
          </Typography>
          <Typography variant="h6" component="div">
            Welcome! We are passionate about delivering top-notch food products that bring joy to your table.
            Our mission is to provide high-quality, delicious, and wholesome products that you can trust.
          </Typography>
          <Typography sx={{ mt: 2, mb: 1.5 }} color="text.secondary">
            We believe in using the finest ingredients to create food products that not only taste great but also contribute to a healthier lifestyle.
            Our commitment to quality and sustainability drives everything we do.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
    <footer style={{color:"black" ,fontSize:"10px"}}><h1>© 2024 E-COM. All rights reserved.</h1></footer>
    </>
  );
};

export default About;
