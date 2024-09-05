import React from 'react'
import CardProduct from '../components/CardProduct'
import Header from '../components/Header';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';
import { mProduct } from '../model/mProduct';
import { ProductController } from '../controller/ProductController';

export default function Product() {
    let ctl = new  ProductController();
    let entityCollection = ctl.GetAll()
  return (
<>

    {/* <p>{entityCollection.length}</p> */}
    <Header></Header>
    {/* ----------------------------- */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid body container spacing={2}>
      {entityCollection.map((entity) => (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
        <CardProduct {...entity}></CardProduct>
       </Grid>
      ))}
      </Grid>
    </Box>
</>
  );
}