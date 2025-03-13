import { categories } from '$lib/data/products'

export function load({ params }) {
  console.log("server:" + params.slug);
  const current_category = categories.find(category => category.toLowerCase() === params.slug.toLowerCase());

  if (params.slug) console.log(params.slug);
  return { current_category };
}