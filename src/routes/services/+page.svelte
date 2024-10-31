<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Service from '$lib/components/Service.svelte';
</script>

<div class="px-lg md:px-xl py-3xl  bg-accent-2">
	<div class="max-w-screen-lg mx-auto ">
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg text-center">Our Services</h3>
		<p class="text-lg text-black-11 mb-2xl text-center">Whether you need something to spruce up your office or home, we got you covered</p>
		<div
			class="relative z-10 flex-center flex-col md:flex-row space-y-lg md:space-y-0 md:space-x-md mb-3xl"
		>

			<Service text="Residential" href="/services/residential">
				<img src="/residential1.png" alt="Residential Service" class="hover:scale-110 transition-transform duration-300"/>
			</Service>
			<Service text="Commercial" href="/services/commercial">
				<img src="/commercial1.png" alt="Residential Service" class="hover:scale-110 transition-transform duration-300"/>
			</Service>
			<Service text="Other Services" href="/services/other">
				<img src="/other1.png" alt="Residential Service" class="hover:scale-110 transition-transform duration-300"/>
			</Service>
			<!-- <div class=" h-[440px] flex-1 bg-black-1 p-lg flex-center flex-col drop-shadow rounded-md">
				<h2 class="text-3xl font-medium text-black-12 marcellus mb-xl">
					<span class=" ">Full</span> Package
				</h2>
				<ul class="list-disc text-lg flex-center flex-col flex-1 px-lg space-y-sm">
					<li>Shopping of NEW decor based on style desired by client</li>
					<li>Full assembly and staging of decor</li>
					<li>We can store the decor for you in off seasons</li>
				</ul>
				<div class="w-full h-[1px] bg-black-5 my-lg" />
				<p class="text-xl text-black-12">
					Pricing Starting at <span class="text-2xl font-medium">$350</span>
				</p>
			</div> -->
		</div>
		<div class="mb-3xl">
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">Year Round Services</h3>
			<p class="text-lg text-black-11 mb-md">We offer a variety of year round services. Feel free to reach out with questions! </p>
			<ol class="list-decimal space-y-sm list-inside text-lg text-black-11">
	
				<li> Service 1 </li>
				<li>Service 2</li>
				<li>
					Service 3
				</li>
			</ol>
		</div>
		<div class="relative z-10 flex justify-center">
			<Button
			accent
				onClick={() => {
					goto('/').then(() => {
						document.getElementById('bookconsultation')?.scrollIntoView();
					});
				}}>Book A Consultation</Button
			>
		</div>
	</div>
	
</div>
