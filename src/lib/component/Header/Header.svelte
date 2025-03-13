<script>
    import { mockProductData } from "$lib/data/products";
    import BasketCounter from "$lib/component/Basket/BasketCounter.svelte"
    let isOpen = false;
    let categories = new Set(mockProductData.products.map(data => data.category));
</script>

<nav class="flex items-center justify-between px-6 py-4 bg-gray-800 text-white w-full ">
    <a href="/" class="text-xl font-bold">Home</a>
    <BasketCounter />
    <div class="relative">
        <button class="px-4 py-2 bg-gray-700 rounded-md" on:click={() => isOpen = !isOpen}>
            Dropdown <i class="fa fa-caret-down"></i>
          </button>
          <div class={`absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg ${isOpen ? '' : 'hidden'}`}>
            {#each categories as category(category)}
            <a href="/products/{category}" class="block px-4 py-2 hover:bg-gray-200">{category}</a>
            {/each}
          </div>
    </div>
</nav>

<style>

</style>