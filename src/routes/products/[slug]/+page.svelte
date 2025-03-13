<script>
	import ProductGroup from "$lib/component/ProductGroup/ProductGroup.svelte";
    const { data } = $props();
    const current_category = data.current_category;
</script>

<div>
    <h1>Category: {current_category}</h1>
    <ProductGroup />
</div>

