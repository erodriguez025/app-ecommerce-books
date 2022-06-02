import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export default function CartWidget() {
  return (
    <>
      <IconButton aria-label='show cart items' color='inherit'>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon fontSize='large' color='primary' />
        </Badge>
      </IconButton>
    </>
  )
}
