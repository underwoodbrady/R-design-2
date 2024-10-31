<script lang="ts">
	import MenuIcon from 'virtual:icons/material-symbols/menu-rounded';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import HeaderLink from './HeaderLink.svelte';

	$: currentPage = $page.url.pathname;

	export let onSideMenuButtonPressed: () => void = () => {};

	// let scrollY: number;
	// let headerDiv: HTMLElement;
	// let headerDivWhite: boolean;
	// let isWideScreen: boolean = false;

	// function checkScreenWidth() {
	// 	isWideScreen = window.innerWidth >= 1064;
	// }

	// function updateScroll() {
	// 	if (!isWideScreen) return;

	// 	scrollY = window.scrollY;
	// 	if (scrollY > 92 && !headerDivWhite) {
	// 		headerDiv.style.backgroundColor = '#fcfefd';
	// 		headerDiv.style.borderBottomWidth = '1px';
	// 		headerDivWhite = true;
	// 	} else if (scrollY < 92 && headerDivWhite) {
	// 		headerDiv.style.backgroundColor = 'transparent';
	// 		headerDiv.style.borderBottomWidth = '0px';
	// 		headerDivWhite = false;
	// 	}
	// }

	// onMount(() => {
	// 	if (!browser) return;

	// 	checkScreenWidth();
	// 	updateScroll();

	// 	window.addEventListener('scroll', updateScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', updateScroll);
	// 	};
	// });
</script>

<header
	class="fixed left-0 top-0 w-full z-30 px-xl h-[144px] transition-colors duration-250 border-b-primary-5  bg-[#737373] text-white drop-shadow"
>
	<nav class="flex-center justify-between w-full h-full max-w-screen-xl mx-auto">
		<a href="/">
			<img src="/spruce-final-1.png" alt="Company Logo" class="w-40 mb-sm" />
		</a>
		<ul class="hidden md:flex-center space-x-xl font-medium">
			<HeaderLink text="Home" href="/" {currentPage}/>
			<HeaderLink text="Gallery" href="/gallery" {currentPage}/>
			<HeaderLink text="Services" href="/services" {currentPage}/>
			<HeaderLink text="About Us" href="/aboutus" {currentPage}/>
			<HeaderLink text="Blog" href="/blog" {currentPage}/>			
		</ul>
		<div class="hidden md:flex-center">
			<Button
				onClick={() => {
					goto('/bookconsultation');
				}}>Spruce Up My Home!</Button
			>
		</div>
		<nav class="block md:hidden">
			<button on:click={onSideMenuButtonPressed}>
				<MenuIcon class="text-black-1 w-8 h-8" />
			</button>
		</nav>
	</nav>
</header>
