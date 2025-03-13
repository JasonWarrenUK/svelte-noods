<script lang="ts">
	import type { Product } from '$lib/data/products';

	let basket = $state<Product[]>([]);

	const basketCount = $derived.by(() => basket.length);

	export function addToBasket(product: Product) {
		basket = [...basket, product];
	}

	export function clearBasket() {
		basket = [];
	}

</script>

<div class="basket-counter">
	🛒
	{#if basketCount > 0}
		<span class="counter">{basketCount}</span>
	{/if}
</div>