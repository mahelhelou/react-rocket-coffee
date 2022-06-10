import ProductListItem from './ProductListItem'
import { action } from '@storybook/addon-actions'

// Using component story format (CSF)
export default {
	title: 'Product List Item',
	component: ProductListItem
}

export const standard = () => <ProductListItem name='Standard Coffee' price='2.50' onAddToCart={action('Added to cart!')} imageUrl='https://source.unsplash.com/tNALoIZhqVM/200x100/' />
