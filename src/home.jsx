// DisplayComponent.js
import React, { useState } from 'react';
import useMyContext from './useMyContext';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

const DisplayComponent = ({ product }) => {
  const { value, setValue } = useMyContext();
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setValue({
      totalprice: value.totalprice + product.price,
      totalqt: value.totalqt + 1
    });
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setValue({
        totalprice: value.totalprice - product.price,
        totalqt: value.totalqt - 1
      });
    }
  };

  return (
    <Grid sx={{margin: '67px'}}>
<Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <img src={product.thumbnail} alt={product.title} style={{ width: '112px', marginTop: '10px', marginBottom: '10px' }} />
        <Typography color="text.secondary" gutterBottom>
          ${product.price}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {product.description}
        </Typography>
        <div>
          <IconButton aria-label="decrease quantity" onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" display="inline">
            {quantity}
          </Typography>
          <IconButton aria-label="increase quantity" onClick={handleIncrease}>
            <AddIcon />
          </IconButton>
        </div>
      </CardContent>
      
    </Card>

    </Grid>
    
  );
};

export default DisplayComponent;
