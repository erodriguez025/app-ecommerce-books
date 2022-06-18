import React from "react"
import Item from "../../Item/Item"
import Grid from '@mui/material/Grid';


export const ItemList = ({ products }) => {
	return (
		<>
			<div className="row">
        <Grid container spacing={2}>
          {
            products.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                  img={product.img}
                  key={product.id}
                  author={product.author}
                  description={product.description}
                  category_name={product.category_name}
                  rating={product.rating}
                />
              </Grid>
              ))
          }
        </Grid>
			</div>
		</>
	)
}

    