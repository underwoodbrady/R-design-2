<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Check from 'virtual:icons/material-symbols/check-small-rounded';

	let options: string[] = ['Traditional', 'Elegant', 'Whimsical', 'Custom', 'Corporate'];
	let selectedOption: number = 0;

	interface GalleryImage {
		src: string;
		categories: string[];
	}

	let images: GalleryImage[] = [
		{ src: '/tree1.png', categories: ['All', 'Traditional'] },
		{ src: '/tree2.png', categories: ['All', 'Traditional'] },
		{ src: '/tree3.png', categories: ['All', 'Traditional'] },
		{ src: '/tree4.png', categories: ['All', 'Whimsical'] },
		// { src: '/tree6.png', categories: ['All', 'Theme Parties'] },
		// { src: '/tree7.png', categories: ['All', 'Theme Parties'] },
		{ src: '/tree8.png', categories: ['All', 'Whimsical'] },
		{ src: '/tree9.png', categories: ['All', 'Traditional'] },
		{ src: '/tree10.png', categories: ['All', 'Traditional'] },
		{ src: '/tree11.png', categories: ['All', 'Theme Parties'] },
	];

	let filteredImages: GalleryImage[] = [];
	let selectedCategory: string = 'Christmas';

	$: {
		selectedCategory = options[selectedOption];
		filteredImages = images.filter((img) => img.categories.includes(selectedCategory));
	}
</script>

<div class="px-lg md:px-xl">

<div class=" py-3xl max-w-screen-xl mx-auto ">
	<div class="h-[720px] overflow-y-auto mb-3xl">
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-2xl">Our Holiday Styles</h3>
		<div class="flex flex-col md:flex-row justify-between space-y-2xl md:space-y-0 md:space-x-3xl mb-3xl">
			<div class="whitespace-nowrap">
				<ul class="text-black-11 flex flex-row flex-wrap gap-sm md:gap-0 md:space-x-0 md:flex-col md:space-y-sm text-lg mb-xl">
					{#each options as style, i}
						<li class={selectedOption == i ? 'text-primary-9 font-semibold ' : ''}>
							<button
								on:click={() => {
									selectedOption = i;
								}}
								class="flex-center space-x-sm"
							>
								{#if selectedOption == i}
									<div
										class="w-5 h-5 rounded-full bg-primary-9 border-black-5 border flex-center justify-center text-black-1"
									>
										<Check />
									</div>
								{:else}
									<div class="w-5 h-5 rounded-full bg-black-1 border-black-5 border"></div>
								{/if}
	
								<p>{options[i]}</p>
							</button>
						</li>
					{/each}
				</ul>
				<Button accent>Book A Consultation</Button>
			</div>
			<div class="grid grid-cols-2 md:grid-cols-3 gap-md w-full">
				{#if filteredImages.length == 0}
				<div class="w-full h-full flex-center justify-center col-start-1 md:col-start-2">
	
				<p class="text-center text-black-11 text-lg">Nothing here yet!</p>
			</div>
	
				{:else}
				{#each filteredImages as image}
				  <div class="w-full h-[400px] bg-primary-3 overflow-hidden">
					<img src={image.src} alt="Tree" class="object-cover w-full h-full"/>
				  </div>
				{/each}
				  {/if}
			  </div>
		</div>
	</div>
	
	<h3 class="text-primary-12 text-4xl arapey font-semibold mb-2xl">Our Theme Parties</h3>
	<div class="flex flex-col ">

		<h4 class="text-2xl font-medium text-black-11 mb-md">Seahawks Theme Party</h4>
		<p class="mb-lg">Details here</p>
		<h4 class="text-2xl font-medium text-black-11 mb-md">Other Theme Party</h4>
		<p>Details here</p>
	</div>
</div>
</div>

<style>
	/* For Webkit browsers (Chrome, Safari, etc.) */
::-webkit-scrollbar {
  width: 8px;  /* Width of the scroll bar */
}

::-webkit-scrollbar-track {
  background: transparent;  /* Track background */
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);  /* Scroll bar color with opacity */
  border-radius: 4px;  /* Rounded corners */
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.7);  /* Darker on hover */
}

/* For Firefox */
* {
  scrollbar-width: thin;  /* "auto" or "thin" */
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent;  /* thumb and track color */
}
</style>