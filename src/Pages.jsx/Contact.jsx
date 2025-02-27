import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function About() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 4, backgroundColor: "#faebd7" }}>
      <CardContent>
        <Typography component="h1" variant="h5" align="center">
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '90%' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="first-name"
            label="First Name"
            sx={{ backgroundColor: "#f0ffff" }}
          /><br />
          <TextField
            required
            id="last-name"
            label="Last Name"
            sx={{ backgroundColor: "#f0ffff" }}
          /><br />
          <TextField
            required
            id="email"
            label="Email"
            sx={{ backgroundColor: "#f0ffff" }}
          /><br />
          <TextField
            required
            id="contact-number"
            label="Contact Number"
            sx={{ backgroundColor: "#f0ffff" }}
          /><br />
        </Box>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ m: 2 }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
