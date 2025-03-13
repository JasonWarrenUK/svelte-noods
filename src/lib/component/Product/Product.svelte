<script lang="ts">
  import type { Product } from '$lib/data/products';

  interface Props {
		product: Product
	}
	let { product }: Props = $props();

</script>

<div class="product">
  <img class="product-image" src={product.images[0]} alt={product.name} />
  <div class="product-info">
    <h3 class="product-name">{product.name}</h3>
    <p class="product-description">{product.description.slice(0, 60)}...</p>
    <span class="product-price">${product.price}</span>
    <a class="product-link" href={`/products/${product.handle}`}>
      <button>View Item</button>
    </a>
  </div>
</div>

<style>
  .product {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    overflow: hidden;
    width: 250px;
  }

  .product-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .product-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .product-price {
    font-weight: bold;
    color: #333;
  }

  button {
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  button:hover {
    background-color: #555;
  }
</style>




