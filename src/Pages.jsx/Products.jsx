import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const[products,setProducts]=useState([])

  useEffect(()=>{
  axios.get('https://dummyjson.com/products').then((res)=>{
    console.log(res)
    setProducts(res.data.products);
  }).catch((error)=>{
    console.log(error)

  })

  
  },[])
  console.log(products,"productdetails")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleSearch=(e)=>{
    let data=e.target.value
    data=data.toLowerCase()
    console.log(data)
    axios.get(`https://dummyjson.com/products/search?q=${data}`).then((res)=>{
      console.log(res)
      setProducts(res.data.products)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
    <Typography
         gutterBottom
         variant='h3'
         component="div"
         sx={{color:"#1D7D9E",textAlign:"center", margin:"10px" ,}}>
           shop product
         </Typography>
         <Box sx={{ display: 'flex', 
          alignItems: 'flex-end',
          justifyContent:'flex-end',
           marginRight:"150px",
           }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" 
        label="Search for product" 
        variant="standard"
         sx={{width:"500px"}}
         onChange={handleSearch}/>
      </Box>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", flexWrap:"wrap",gap:"20px",margin:"20px",
     
    }}>
    {products.length>0?products.map((item,index)=>{ 
      return(
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader="September 14, 2016"
        sx={{color:"#d8bfd8",
          fontSize:"20px"
        }}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.thumbnail}
        alt="Paella dish"
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
           <Typography variant="h4" color="text.primary" sx={{ mt: 1 }}>
            <h5> Price: ${item.price}</h5>
             </Typography>
            </CardContent>
            <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:"red"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{color:"red"}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
          <ExpandMoreIcon sx={{color:"red"}}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph sx={{color:"#bd3376"}}>Brand:</Typography>
          <Typography paragraph>{item.brand}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph sx={{color:"#bd3376"}}>Shipping Information:</Typography>
          <Typography paragraph>{item.shippingInformation}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph sx={{color:"#bd3376"}}>Rating:</Typography>
          <Typography paragraph>{item.rating}
          </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
      )
    }):"No data found"}
    </div>
    </>
  );
}
  