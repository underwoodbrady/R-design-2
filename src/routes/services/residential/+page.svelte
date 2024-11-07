<script>
	import Button from "$lib/components/Button.svelte";
	import TitleText from "$lib/components/TitleText.svelte";
</script>

<div class="px-xl py-3xl">
	<div class="max-w-screen-xl mx-auto">
		<TitleText text="Residential Services" /> <!-- Primary Header -->
		<img src="/update1.jpg" alt="Tree" class="hidden md:block float-right"/>
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">Consultation</h3> <!-- Subheader Text -->
		<p class="text-black-11 text-lg mb-md">
			To Discuss:
		</p>
		<ul class="list-disc list-inside mb-xl text-lg text-black-11">
			<li>Existing Décor</li>
			<li>Theme and Vision</li>
			<li>Color Palette</li>
			<li>Space Assessment</li>
			<li>Timeline</li>
		</ul>
		
		<h4 class="text-black-11 text-2xl font-medium mb-lg">Additional Services</h4>
		<ul class="list-disc list-inside mb-xl text-lg text-black-11">
			<li>Shopping Options</li>
			<li>Additional Holiday Décor</li>
			<li>Take Down Services</li>
		</ul>
		
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">Design and Installation</h3>
		<p class="text-lg text-black-11 mb-xl">
			Professional installation completed in a timely manner
		</p>
		
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">Pricing</h3>
		<p class="text-lg text-black-11 mb-xl">
			Provided after Consultation
		</p>
		
		<Button accent>Book A Consultation</Button>
	</div>
</div>