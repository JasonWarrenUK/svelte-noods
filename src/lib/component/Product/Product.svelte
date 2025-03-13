<script lang="ts">
  import type { Product } from "$lib/data/products";

  export let product: Product;
</script>

<div class="product-card">
  <div class="product-card_image">
    <img src={product.images[0]} alt={product.name} />
  </div>

  <div class="product-card_content">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
  </div>
</div>
