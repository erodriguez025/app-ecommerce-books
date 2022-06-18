import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
// Components
import { Cart } from "./components/Shop/Cart/Cart"
import { ItemListContainer } from "./components/Shop/Item/ItemList/ItemListContainer"
import Nav from "./components/NavBar/Nav"
import { ItemDetailContainer } from "./components/Shop/Item/ItemDetail/ItemDetailContainer"
// Contexts
import AppContextProvider from "./components/context/AppContext"
import CartContextProvider from "./components/context/CartContext"


function App() {
	return (
		<>  
			<AppContextProvider>
				<CartContextProvider>
					<Router>
						<Nav />
						<Routes>
							<Route exact path="/" element={<ItemListContainer />} />
							<Route
								path="/category/:categoryId"
								element={<ItemListContainer />}
							/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							<Route path="/cart" element={<Cart />} />
							{/* <Route path="*" element={<ItemListContainer />} /> */}
						</Routes>
					</Router>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
}

export default App
