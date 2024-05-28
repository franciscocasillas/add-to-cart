function ProductCard({ name, price, onAddToCart }) {
	return (
		<div>
			<h2>{name}</h2>
			<p>Price: ${price}</p>
			<button onClick={() => onAddToCart(name, price)}>Buy Now</button>
		</div>
	);
}

export default ProductCard;
