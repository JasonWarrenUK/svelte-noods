<script lang="ts">
  import type { ProductGroup } from "$lib/data/products"
  import { mockProductData, categories } from "$lib/data/products"
  import Product from "$lib/component/Product/Product.svelte"

  interface Props {
    category: typeof categories[number]
  }

  let { category }: Props = $props();

  const filteredData: ProductGroup = {
    ...mockProductData,
    products: mockProductData.products.filter(product => product.category === category),
    name: `${category}`,
    description: `All ${category.toLowerCase()} products in the store`
  };

  const list: ProductGroup = $state(filteredData);
</script>

<div class="product-group">
  <div class="product-group_header flex flex-col gap-2">
    <div> 
      <h3 class="text-2xl font-bold">{ list.name }</h3>
    </div>
    
    <div> 
      <p class="text-sm text-gray-500">{ list.description }</p>
    </div>
  </div>

  <div class="product-group_gallery">
    {#each list.products as product}
      <Product {product} />
    {/each}
  </div>
</div>

<style>
  .product-group {
    width: 100%;
  }

  .product-group_header {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 600px) {
    .product-group_header {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
  }

  .product-group_gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  .product-group_gallery > :global(div) {
    flex: 1 1 calc(25% - 0.75rem);
    min-width: 250px;
  }

  @media (max-width: 1200px) {
    .product-group_gallery > :global(div) {
      flex: 1 1 calc(33.333% - 0.667rem);
    }
  }

  @media (max-width: 900px) {
    .product-group_gallery > :global(div) {
      flex: 1 1 calc(50% - 0.5rem);
    }
  }

  @media (max-width: 600px) {
    .product-group_gallery > :global(div) {
      flex: 1 1 100%;
    }
  }
</style>