import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "../../../context/AppContext"
import { getItem } from "../../../firebase/firebaseService"
import { ItemDetail } from "./ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
	const { products } = useAppContext()

	const [productClicked, setProductClicked] = useState({})

	const { id } = useParams()

	useEffect(() => {
		getItem(id).then((item) =>
			setProductClicked({ ...item.data(), id: item.id })
		)
	}, [id, products])

	// Funcion onAdd
	const [terminar, setTerminar] = useState(false)
	const onAdd = () => {
		setTerminar(true)
	}

	return (
		<div className="container mt-3">
			<ItemDetail product={productClicked} onAdd={onAdd} terminar={terminar} />
		</div>
	)
}
