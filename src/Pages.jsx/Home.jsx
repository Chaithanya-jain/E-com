import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const featuredProducts = [
  {
    id: 1,
    name: 'Stylish Sneakers',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    price: '$49.99',
    image: 'https://th.bing.com/th/id/OIP.7Hfie_uOBGiC3EJ1bib8lQAAAA?w=187&h=187&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 2,
    name: 'Elegant Watch',
    description: 'A sophisticated watch for every occasion.',
    price: '$149.99',
    image: 'https://th.bing.com/th/id/OIP.fx4HBRegFL47LHK__5VbHAAAAA?w=313&h=167&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 3,
    name: 'Classic Sunglasses',
    description: 'Protect your eyes with style.',
    price: '$59.99',
    image: 'https://th.bing.com/th/id/OIP.0oebwxV0QZtal-Ft8A2bIQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7',
  },
];

const HomePage = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url(https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          py: 18,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to E-COM
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Discover the best deals on fashion, electronics, and more!
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Shop Now
          </Button>
        </Container>
      </Box>
      <Container sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
              
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
