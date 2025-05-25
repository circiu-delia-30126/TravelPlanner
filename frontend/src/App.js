import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box, Typography, CssBaseline } from '@mui/material';
import DestinationList from './components/DestinationList';
import AddDestination from './components/AddDestination';

function Home() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" align="center">Bine ai venit la Travel Planner!</Typography>
      <Typography align="center" sx={{ mt: 2 }}>Planifică și descoperă destinații de vis.</Typography>
    </Box>
  );
}

function About() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4">Despre aplicație</Typography>
      <Typography sx={{ mt: 2 }}>Aceasta este o aplicație demo full-stack pentru gestionarea destinațiilor de călătorie.</Typography>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/destinatii">Destinații</Button>
          <Button color="inherit" component={Link} to="/adauga">Adaugă Destinație</Button>
          <Button color="inherit" component={Link} to="/despre">Despre</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinatii" element={<DestinationList />} />
          <Route path="/adauga" element={<AddDestination />} />
          <Route path="/despre" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
