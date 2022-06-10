import './ProductListItem.css'

// Product list item component
const ProductListItem = props => {
	return (
		<div className='card'>
			<h2>{props.name}</h2>
			<img src={props.imageUrl} alt='' />
			<small>{props.price}</small>
			<button onClick={props.onAddToCart}>Add to Cart</button>
		</div>
	)
}

export default ProductListItem
