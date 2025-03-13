<script>
	import ProductGroup from "$lib/component/ProductGroup/ProductGroup.svelte";

	let { data } = $props();
</script>

<div>
    <ProductGroup category={data.category} />
</div>

<style>
</style>
