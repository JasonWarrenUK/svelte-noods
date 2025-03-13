import { categories } from '$lib/data/products'

export function load({ params }) {
    const current_category = categories.find(category => category.toLowerCase() === params.slug.toLowerCase());

    return { current_category };
}