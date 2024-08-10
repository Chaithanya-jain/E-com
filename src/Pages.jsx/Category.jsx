import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Category() {
  const [categories, setCategories] = useState([]); // Correctly declare state

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
   
      .then((res) => {
       
        console.log(res,"res");
        setCategories(res.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(categories, "categories");
  return (
    <>
    <Typography
         gutterBottom
         variant='h3'
         component="div"
         sx={{color:"#1D7D9E",textAlign:"center", margin:"10px" ,}}>
           Browse product categories
         </Typography>
    
    <Grid container spacing={2}
    sx={{marginTop:"10px",
    padding:"2px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    }}
    >

    {categories.map((item,i)=>{
      return(
        <Grid item xs={12}sm={6}md={4}>
        <Card sx={{ maxWidth: 345, backgroundColor:"#C2F3F6", margin:2 }}>
      <CardActionArea>
        <CardContent>
         <Link to={`/cat-product/${item.name}`}> <Typography gutterBottom variant="h5" component="div" textAlign='center'>
            {item.name} 
          </Typography></Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </Grid>
      )
    })}
    </Grid>
    </>

    

  );
}
