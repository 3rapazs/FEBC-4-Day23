import React from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Chip from '@mui/material/Chip';

function CheckOut() {
  return (
      <>
      <div align="center">

<b><h1>Checkout form</h1></b>
<p>Below is an example form built entirely with Bootstrap's form controls. Each required form group has a <br></br>
validation state that can be triggered by attempting to submit the form without completing it. <br></br>
</p>
<br></br>
{/* <Button variant="contained" color="primary">Main cakk to action</Button>
<Button variant="contained" color="inherit">Secondary action</Button>  */}
<br></br>
</div>
<br></br>

<Grid body container spacing={2}>
      <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
      <h1>Billing address</h1>

      <Grid body container spacing={2}>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="First Name" variant="outlined" />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Last Name" variant="outlined" />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Username" variant="outlined" />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Email" variant="outlined" />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Address" variant="outlined" />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Address2" variant="outlined" />
      </Grid>


      <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Country" variant="outlined" />
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="State" variant="outlined" />
      </Grid>
      <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Zip" variant="outlined" />
      </Grid>

    <hr></hr>

    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
    <FormGroup>
      <FormControlLabel  control={<Checkbox />} label="Shipping address is the same as my billing address" />
      <FormControlLabel  control={<Checkbox />} label="Save this information for next time" />
    </FormGroup>
    </Grid>

    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
<h1>Payment</h1>
<FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Credit card" />
        <FormControlLabel value="male" control={<Radio />} label="Debit card" />
        <FormControlLabel value="other" control={<Radio />} label="Paypal" />
      </RadioGroup>
    </FormControl>
    </Grid>


    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Name on card" variant="outlined" />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <TextField sx={{ m: 1 ,width: '100%'}} id="outlined-basic" label="Credit card number" variant="outlined" />
      </Grid>


      </Grid>







      </Grid>

      <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
       

        <Grid body container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <h1>Your cart</h1>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
      <div style={{textAlign: 'right'}}>  <Chip label="3" /></div>
      </Grid>
      </Grid>



      <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Grid body container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          Product 1
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <div style={{textAlign: 'right'}} color="text.secondary"> $12</div>
      </Grid>
      </Grid>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description Product 1
        </Typography>
      </CardContent>
    </Card>
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Grid body container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          Product 2
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <div style={{textAlign: 'right'}} color="text.secondary"> $8</div>
      </Grid>
      </Grid>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description Product 2
        </Typography>
      </CardContent>
    </Card>
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Grid body container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          Product 3
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <div style={{textAlign: 'right'}} color="text.secondary"> $5</div>
      </Grid>
      </Grid>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description Product 3
        </Typography>
      </CardContent>
    </Card>

    <Card style={{color: 'green'}}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        <Grid body container spacing={2}>
          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          Promo Code
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
        <div style={{textAlign: 'right'}} color="text.secondary"> -$5</div>
      </Grid>
      </Grid>
        </Typography>
        <Typography variant="body2">
        EXAMPLECODE
        </Typography>
      </CardContent>
    </Card>


    <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Grid body container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
     Total (USD)
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <div style={{textAlign: 'right'}}> <b>$20</b></div>
      </Grid>
      </Grid>
        </Typography>
      
      </CardContent>
    </Card>

<br></br>

<Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div>
          <Grid body container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
      <TextField sx={{width: '100%'}} id="outlined-basic" label="Promo Code" variant="outlined" />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
      <Button variant="contained" sx={{height: '55px;',width: '100%'}} color="inherit">Redeen</Button> 
      </Grid>
      </Grid>
          </div>
        </Typography>
       
      </CardContent>
    </Card>

      </Grid>



      </Grid>


      </>
  )
}

export default CheckOut