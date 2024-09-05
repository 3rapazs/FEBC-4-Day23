import React from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Header() {
  return (

    <>

<div align="center">

    <b><h1>Album example</h1></b>
    <p>Something short and leading about the collection below--its contents, <br></br>
the creator, etc. Make it short and sweet, but not too short so folks <br></br>
don't simply skip over it entirely.</p>
    <br></br>
    <Button variant="contained" color="primary">Main cakk to action</Button>
    <Button variant="contained" color="inherit">Secondary action</Button> 
    <br></br>
    </div>
    <br></br>
    </>

  )
}

export default Header