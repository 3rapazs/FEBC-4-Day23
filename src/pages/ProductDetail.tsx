import React from 'react'
import { useParams } from 'react-router-dom'
import { mProduct } from '../model/mProduct';
import { ProductController } from '../controller/ProductController';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { CardHeader } from '@mui/material';
import Image from 'mui-image'
import LinearProgress from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductDetail() {

  const {id}  = useParams();
  const idNum = +id;

  let ctl = new  ProductController(); 
  let entity = ctl.GetRecord(idNum);
  

  const AddCart = () => {
    let obj = ctl.GetRecord(idNum);
    // let text = localStorage.getItem("MyCart");
    // let entityCollection =  mProduct[] = [];
    //let entityCollection2 = JSON.parse(text);
    //console.log(entityCollection)


    // let entityCollection =  JSON.parse(
    //   localStorage.getItem('token') || '{}'
    // ) as Token;

    // localStorage.setItem("myCat", "Tom");
  




    entityCollection.push(entity);
    let entityCollectionText = JSON.stringify(obj);
    localStorage.setItem("MyCart", entityCollectionText);
    console.log(entityCollection.length)
  };



  return (


    <>

<Box sx={{ flexGrow: 1 }}>
        {/* <div>{entity.id}</div> */}
      <Grid body container spacing={2}>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>

  <Box sx={{ height: '85%', width: '100%' }}>
<Image src="/src/assets/images/product/black.jpg" />
</Box>

    <p>Stock({entity.stock}/{entity.stockMax})</p>
<Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={entity.stock} />
    </Box>


       </Grid>
       <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
     
      <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {entity.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {entity.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : <b>${entity.price}</b>
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Quantity : 
        </Typography> */}
        <Typography variant="body2" color="text.secondary">

        <TextField
          label="Quantity"
          type="number"
          
        />
        </Typography>



      </CardContent>
      <CardActions>
      <Button variant="contained" onClick={AddCart}>Add To Cart</Button>
      </CardActions>
    </Card>
    <br></br>


    <Card >
      

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Specifications
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {entity.description}
        </Typography> */}

          
    {entity.note.map((entity) => (
      //   <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      //   <CardProduct {...entity}></CardProduct>
      //  </Grid>
      <Typography gutterBottom variant="h5" component="div">
      {entity}
      </Typography>



      ))}




      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>

    

       </Grid>
      </Grid>

      <br></br>
      <Grid body container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Rate this Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
    </Stack>
        </Typography>
      </CardContent>
    </Card>
      </Grid>
      </Grid>

      <br></br>
      <Grid body container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Reviews
        </Typography>
        {entity.reviews.map((entity) => (
          <>
      <Typography gutterBottom variant="h4" component="div">
<b>user</b>
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
      {entity}
      </Typography>
      </>

      ))}
      </CardContent>
    </Card>
      </Grid>
      </Grid>

      </Box>
    
    
    </>




  )
}

export default ProductDetail