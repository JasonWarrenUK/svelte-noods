<script>
	import ProductGroup from "$lib/component/ProductGroup/ProductGroup.svelte";
    let { data } = $props();
    let current_category = data.current_category;
</script>

<div>
    <h1>Category: {current_category}</h1>
    <ProductGroup category={data.current_category} />
</div>

