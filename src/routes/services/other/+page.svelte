<script>
	import Button from '$lib/components/Button.svelte';
	import TitleText from '$lib/components/TitleText.svelte';
</script>

<div class="px-xl py-3xl">
	<div class="max-w-screen-xl mx-auto">
		<TitleText text="Our Other Services" /> <!-- Primary Header -->
		<img src="/other23.jpg" alt="Tree" class="hidden md:block float-right"/>

		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">A Spruce For All Seasons</h3> <!-- Subheader Text -->
		<p class="text-lg text-black-11 mb-lg">
			Spring, summer, valentines, thanksgiving, airbnbs
		</p>
		
		<h4 class="text-black-11 text-2xl font-medium mb-lg">A la carte</h4>
		<p class="text-lg text-black-11 mb-lg">Includes options for:</p>
		<ul class="list-disc list-inside mb-xl text-lg text-black-11">
			<li>Mantels</li>
			<li>Banisters</li>
			<li>Doorways</li>
			<li>Porches</li>
		</ul>
		
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">Year Round Services</h3> <!-- Secondary Header -->
		<p class="text-lg text-black-11 mb-md">
			We offer a variety of year round services. Feel free to reach out with questions!
		</p>
		<ol class="list-decimal space-y-sm list-inside text-lg text-black-11 mb-lg">
			<li>Theme Parties</li>
			<li>Seasonal Trees</li>
			<li>Event Planning</li>
		</ol>
		
		<Button accent>Book A Consultation</Button>
	</div>
</div>