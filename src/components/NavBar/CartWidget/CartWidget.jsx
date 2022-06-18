import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useCartContext } from '../../context/CartContext';



export default function CartWidget() {

  const { cart } = useCartContext()
  
  let cantidad_total = 0

	for (let i = 0; i < cart.length; i++) {
		const cantidad = cart[i].quantity

		cantidad_total += cantidad
	}

  return (
    <>
      <IconButton aria-label='show cart items' color='inherit'>
        <Badge badgeContent={cantidad_total} color="secondary">
          <ShoppingCartIcon fontSize='large' color='primary' />
        </Badge>
      </IconButton>
    </>
  )
}
