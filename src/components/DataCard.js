import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const DataCard = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}> {/* Changed md={3} to display 4 cards in a row */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.url}
              alt="Property Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.property_title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {item.pricing}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Street Address: {item.street_address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Beds: {item.beds}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone Number: {item.phone_number}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DataCard;
