import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import axios from 'axios';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/destinations');
      setDestinations(response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/destinations/${id}`);
      fetchDestinations();
    } catch (error) {
      console.error('Error deleting destination:', error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <Grid container spacing={3}>
      {destinations.map((destination) => (
        <Grid item xs={12} sm={6} md={4} key={destination.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={destination.imageUrl || 'https://via.placeholder.com/300x140'}
              alt={destination.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {destination.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {destination.country}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {destination.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Rating: {destination.rating}/5
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(destination.id)}
                  sx={{ mt: 1 }}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DestinationList; 