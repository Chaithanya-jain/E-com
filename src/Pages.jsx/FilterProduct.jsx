import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function FilterProduct() {
    const { catname } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${catname}`)
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [catname]);

    return (
        <>
         <Typography
         gutterBottom
         variant='h3'
         component="div"
         sx={{color:"#1D7D9E",textAlign:"center", margin:"10px" ,}}
         >
           {catname} Products
         </Typography>

        <div style={{ display:"flex",
            flexWrap:"wrap",
            alignItems:"center",
            margin:"25px",
            gap:"20px",
            justifyContent:"center"

         }}>
            { products.length>0?
                products?.map((item,i) => (
                    <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                            sx={{height:140}}
                            image={item.thumbnail}
                            title="green iguana"
                            />
                            <CardContent>
                                <Typography
                                 gutterBottom variant="h5"
                                 component="div"
                                 sx={{color:"#406F2D"}} >
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                                   <h5> Price: ${item.price}</h5>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{backgroundColor:"#d8bfd8"}}>Share</Button>
                                <Button size="small"sx={{backgroundColor:"#d8bfd8" }}>Learn More</Button>
                            </CardActions>
                        </Card>
                )):"No data found for this category"}
        </div>
        </>
    );
}

