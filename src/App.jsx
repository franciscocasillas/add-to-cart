import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
	const [products, setProducts] = useState([
		{ name: "shirt", price: 500 },
		{ name: "pants", price: 200 },
	]);

	const handleAddToCart = (productName, productPrice) => {
		console.log("Product added to cart", productName, productPrice);
	};

	return (
		<div>
			{products.map((product) => (
				<ProductCard
					key={product.name}
					name={product.name}
					price={product.price}
					onAddToCart={handleAddToCart}
				/>
			))}
		</div>
	);
}

export default App;
