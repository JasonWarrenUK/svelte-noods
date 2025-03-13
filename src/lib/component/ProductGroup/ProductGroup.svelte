<script lang="ts">
  import type { ProductGroup } from "$lib/data/products"
  import { mockProductData } from "$lib/data/products"
  import Product from "$lib/component/Product/Product.svelte"

  const list: ProductGroup = $state(mockProductData);
</script>

<div class="product-group">
  <div class="product-group_header">
    <h3>{ list.name }</h3>
    <p>{ list.description }</p>
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