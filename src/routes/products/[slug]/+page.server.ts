import { categories } from "$lib/data/products";

export function load({ params }) {
	const category = categories.find((category) => category === params.slug);

	return { category }
}