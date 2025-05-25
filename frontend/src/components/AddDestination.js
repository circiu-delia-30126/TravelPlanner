import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography, Alert } from '@mui/material';
import axios from 'axios';

const AddDestination = () => {
  const [destination, setDestination] = useState({
    name: '',
    country: '',
    description: '',
    imageUrl: '',
    rating: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/destinations', {
        ...destination,
        rating: parseFloat(destination.rating)
      });
      setDestination({
        name: '',
        country: '',
        description: '',
        imageUrl: '',
        rating: ''
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error adding destination:', error);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Adaugă Destinație Nouă
      </Typography>
      {success && <Alert severity="success">Destinația a fost adăugată!</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          name="name"
          label="Nume Destinație"
          value={destination.name}
          onChange={handleChange}
          required
        />
        <TextField
          name="country"
          label="Țara"
          value={destination.country}
          onChange={handleChange}
          required
        />
        <TextField
          name="description"
          label="Descriere"
          value={destination.description}
          onChange={handleChange}
          multiline
          rows={3}
          required
        />
        <TextField
          name="imageUrl"
          label="URL Imagine"
          value={destination.imageUrl}
          onChange={handleChange}
        />
        <TextField
          name="rating"
          label="Rating (0-5)"
          type="number"
          value={destination.rating}
          onChange={handleChange}
          inputProps={{ min: 0, max: 5, step: 0.1 }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Adaugă Destinație
        </Button>
      </Box>
    </Paper>
  );
};

export default AddDestination; 