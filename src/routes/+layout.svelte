<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SideMenu from '$lib/components/Sidemenu.svelte';
	import '../app.css';
	import { page } from '$app/stores';


	let currentPage = $page.url.pathname;

	$: currentPage = $page.url.pathname;

	let sideMenuOpen = false;
	let openedOnce = false;

	function openSideMenu() {
		sideMenuOpen = true;
		openedOnce = true;
	}
</script>
<Header onSideMenuButtonPressed={openSideMenu}/>
<main class="mt-[144px] relative">
	<slot />
</main>
<Footer />
<SideMenu {currentPage} bind:sideMenuOpen />
