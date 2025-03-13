<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Product from './Product.svelte';
	import { mockProductData } from '$lib/data/products';

	const { Story } = defineMeta({
		title: 'ProductCard',
		component: Product
	});
</script>

<Story
	name="Primary"
	args={{
		product: mockProductData.products[0],
	}}
/>

