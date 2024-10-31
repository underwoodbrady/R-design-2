<script lang="ts">
	import CloseIcon from 'virtual:icons/material-symbols/close-rounded';
	import PlusIcon from 'virtual:icons/mdi/plus';
	import MinusIcon from 'virtual:icons/mdi/minus';
	import Instagram from 'virtual:icons/mdi/instagram';
	import Facebook from 'virtual:icons/mdi/facebook';
    import Twitter from 'virtual:icons/mdi/twitter';

	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';

	export let sideMenuOpen: boolean;
	export let currentPage;

	let isVisible = false;

	$: {
		if (sideMenuOpen) {
			isVisible = true;
		}
	}

	function closeSideMenu() {
		sideMenuOpen = false;
		setTimeout(() => (isVisible = false), 350);
	}

	function closeAndNav(route: string) {
		closeSideMenu();
		goto(route);
	}
</script>

{#if isVisible}
	<div
		class="fixed z-40 left-0 top-0 w-full h-full"
		class:openBackground={sideMenuOpen}
		class:closeBackground={!sideMenuOpen}
	>
		<aside
			class={'absolute w-64 right-0 top-0 h-full bg-black-11 text-black-7 py-lg flex flex-col justify-between '}
			class:openSidemenu={sideMenuOpen}
			class:closeSidemenu={!sideMenuOpen}
		>
			<div class="">
				<button on:click={closeSideMenu} class="px-6">
					<CloseIcon class="text-xl mb-6" />
				</button>
				<nav>
					<ul class="text-base">
						<li class={currentPage == '/' ? 'text-white' : ''}>
							<button
								on:click={() => closeAndNav('/')}
								class="py-sm px-lg border-b border-b-black-10 w-full text-left"
							>
								Home
							</button>
						</li>
						<li class={currentPage == '/gallery' ? 'text-white' : ''}>
							<button
								on:click={() => closeAndNav('/gallery')}
								class="py-sm px-lg border-b border-b-black-10 w-full text-left"
							>
								Gallery
							</button>
						</li>
						<li class={currentPage == '/services' ? 'text-white' : ''}>
							<button
								on:click={() => closeAndNav('/services')}
								class="py-sm px-lg border-b border-b-black-10 w-full text-left"
							>
								Services
							</button>
						</li>
						<li class={currentPage == '/aboutus' ? 'text-white' : ''}>
							<button
								on:click={() => closeAndNav('/aboutus')}
								class="py-sm px-lg border-b border-b-black-10 w-full text-left"
							>
								About Us
							</button>
						</li>
						<li class={currentPage == '/blog' ? 'text-white' : ''}>
							<button
								on:click={() => closeAndNav('/blog')}
								class="py-sm px-lg border-b border-b-black-10 w-full text-left"
							>
								Blog
							</button>
						</li>
					</ul>
				</nav>
				<div class="flex-center mx-auto justify-center space-x-3 text-lg mt-6">
					<a
						href="/"
						class="hover:text-blue-1000 duration-100 transition-colors"
						aria-label="Visit our Instagram Page"><Instagram /></a
					>
					<a
						href="/"
						class="hover:text-blue-1000 duration-100 transition-colors"
						aria-label="Visit our Facebook page"><Facebook /></a
					>
					<a
						href="/"
						class="hover:text-blue-1000 duration-100 transition-colors"
						aria-label="Visit our Facebook page"><Twitter /></a
					>
				</div>
			</div>

			<div class="w-full mb-6 px-lg flex">
				<Button
                extended
					onClick={() => {
						closeSideMenu();
						goto('/bookconsultation');
					}}
				>Book Consultation</Button>
			</div>
		</aside>
	</div>
{/if}

<style>
	.openSidemenu {
		animation: openIt 0.35s forwards;
	}
	.closeSidemenu {
		animation: closeIt 0.35s forwards;
	}

	.openBackground {
		animation: openBackground 0.35s forwards;
	}

	.closeBackground {
		animation: closeBackground 0.35s forwards;
	}

	@keyframes openIt {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes closeIt {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}

	@keyframes openBackground {
		from {
			background-color: rgba(0, 0, 0, 0);
		}
		to {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}

	@keyframes closeBackground {
		0% {
			background-color: rgba(0, 0, 0, 0.3);
		}
		99% {
			background-color: rgba(0, 0, 0, 0);
		}
		100% {
			display: none;
		}
	}
</style>
