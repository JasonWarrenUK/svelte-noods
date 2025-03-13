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

<style>
  .product-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .product-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .product-card_image {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
  }

  .product-card_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .product-card:hover .product-card_image img {
    transform: scale(1.05);
  }

  .product-card_content {
    padding: 1.25rem;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #666;
  }
</style>
