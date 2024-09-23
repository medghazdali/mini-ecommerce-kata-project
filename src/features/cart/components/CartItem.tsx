import React from 'react';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import { Product } from '../../../types/Product';
import { CustomCard } from '../../../components/common/Card/CustomCard';
import RemoveIcon from '@mui/icons-material/Delete'; // Example icon
import Button from '../../../components/common/Button/Button';

interface RowCardProps {
  product: Product;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveItem: () => void;
}

const RowCard: React.FC<RowCardProps> = ({
  product,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) => {
  return (
    <CustomCard sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <Box sx={{ flex: '1', display: 'flex' }}>
        <Avatar
          src={product.image}
          alt={product.title}
          sx={{ width: 50, height: 50, marginRight: 2, borderRadius: 1 }}
        />
        <Box>
          <Typography variant="h6" fontSize={12}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price.toFixed(2)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            label="-"
            variant="outlined"
            onClick={onDecreaseQuantity}
            sx={{
              width: '25px',
              height: '25px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          />
          <Typography>{quantity}</Typography>
          <Button
            label="+"
            variant="outlined"
            onClick={onIncreaseQuantity}
            sx={{
              width: '25px',
              height: '25px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          />
        </Box>

        <IconButton onClick={onRemoveItem} color="error">
          <RemoveIcon />
        </IconButton>
      </Box>
    </CustomCard>
  );
};

export default RowCard;
