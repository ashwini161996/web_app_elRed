import React from 'react';
import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function AtLinks() {
  return (
    <Container id="Container" maxWidth="100%" sx={{display:"flex", background:"#f1f3f4", position: "relative",  height:"100vh", width:"100vw", overflow:"hidden"}}>
    <Box marginLeft="-2%"><Header/></Box>
    <Box
       sx={{ 
        position: "absolute"}}
    >
    <NavBar/>
    </Box>
  </Container>
  );
}

export default AtLinks;