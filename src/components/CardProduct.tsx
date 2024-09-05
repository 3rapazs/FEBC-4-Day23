import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// 'inherit'
// | 'primary'
// | 'secondary'
// | 'success'
// | 'error'
// | 'info'
// | 'warning'
// | string



export default function CardProduct(entity) {
  return (
    <Card >
      <CardMedia
        sx={{ height: 200 }}
        image="/src/assets/images/product/black.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {entity.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {entity.name}<br></br>
        {entity.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}

<ButtonGroup variant="outlined" aria-label="Basic button group">
  
  <Link to={"/detail/"+entity.id}><Button>View</Button></Link>

  <Button>Edit</Button>
</ButtonGroup>
      </CardActions>
    </Card>
  );
}