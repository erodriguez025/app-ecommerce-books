import CartItem from "./CartItem/CartItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartResume } from "./CartResume/CartResume"
import Swal from "sweetalert2"
import { useCartContext } from "../../context/CartContext"
import { generateOrder, updateStock } from "../../firebase/firebaseService"

const initialBuyer = {
	name: "",
	phone: "",
	email: "",
}

export const Cart = () => {
	const [buyer, setBuyer] = useState(initialBuyer)
	const { cart, deleteCart } = useCartContext()

	cart.forEach((item) => {
		console.log(item)
	})

	let total = 0

	for (let i = 0; i < cart.length; i++) {
		const price = cart[i].price * cart[i].quantity

		total += price
	}

	const order = {
		buyer,
		item: cart,
		total,
	}

	const handlerSubmit = (e) => {
		e.preventDefault()
		if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "") {
			generateOrder(order)
				.then((res) => {
					new Swal({
						title: "Tu orden fue enviada con éxito!",
						text: `Tu n° de orden es: ${res.id}`,
						icon: "success",
						button: "Ok",
					})
				})
				.then(() => cart.forEach((item) => updateStock(item.id, item.quantity)))
				.then(() => deleteCart())
				.catch(
					(err) => new Swal(`Hubo un Error!`, "Inténtalo nuevamente", "error")
				)
		} else {
			new Swal({
				title: "Hubo un error en tus datos",
				text: "Revisa el formulario de tus datos y vuelve a enviar el pedido",
				icon: "error",
				button: "Ok",
			})
		}
	}

	const handlerChange = (e) => {
		setBuyer({
			...buyer,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div className="container">
			<h1 className="p-3 mt-2 text-center">Bienvenido al Carrito!</h1>
			<hr />

			<div className="row">
				<div className="col-md-8">
					{cart.length !== 0 && (
						<>
							{cart.map((product) => (
								<CartItem key={product.id} product={product} />
							))}
							<div className="text-end m-3">
								<button className="btn btn-danger " onClick={deleteCart}>
									Limpiar Carrito
								</button>
							</div>
						</>
					)}
					{cart.length === 0 && (
						<>
							<h3>Parece que no hay productos en el carrito,</h3>
							<Link
								to="/"
								className="btn bg-principal text-white d-block w-100 mt-3 fw-bolder fs-5"
							>
								Busquemos algunos{" "}
								<i className="ps-3 fas fa-smile-wink fs-5"></i>
							</Link>
						</>
					)}
				</div>
				<div className="col-md-4">
					{cart.length !== 0 && (
						<>
							<div className="card container">
								<h2 className="mt-3 ">Resumen Carrito</h2>

								{cart.map((prod) => (
									<CartResume key={prod.id} prod={prod} />
								))}

								<h3>Total a pagar: ${total}</h3>

								<hr />
								<p>Completa con tus datos para finalizar la compra</p>
								<form
									onSubmit={handlerSubmit}
									onChange={handlerChange}
									className="d-flex flex-column align-center container mt-2 mb-3"
								>
									<input
										className="form-control mb-2"
										type="text"
										placeholder="Nombre"
										name="name"
										value={order.name}
									/>
									<input
										className="form-control mb-2"
										type="number"
										placeholder="Telefono"
										name="phone"
										value={order.phone}
									/>
									<input
										className="form-control mb-2"
										type="email"
										placeholder="Email"
										name="email"
										value={order.email}
									/>

									<button className="btn btn-success d-block mt-2">
										Enviar orden
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
