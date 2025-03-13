<script lang="ts">
	import '../app.css';
	import Header from '$lib/component/Header/Header.svelte';
	import Footer from '$lib/component/Footer/Footer.svelte';
	let { children } = $props();
</script>

<Header />

{@render children()}

<Footer />