import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "../../../context/AppContext"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = () => {
	const { products } = useAppContext()

	const [productsCategory, setProductsCategory] = useState([])

	const { categoryId } = useParams()

	useEffect(() => {
		!categoryId
			? setProductsCategory(products)
			: setProductsCategory(
					products.filter((product) => product.category === categoryId)
			  )
	}, [categoryId, products])

	return (
		<>
			<div className="container mt-4">
				<ItemList products={productsCategory} />
			</div>
		</>
	)
}
