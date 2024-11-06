<script>
	import Button from '$lib/components/Button.svelte';
	import TitleText from '$lib/components/TitleText.svelte';
</script>

<div class="px-xl py-3xl">
	<div class="max-w-screen-xl mx-auto">
		<TitleText text="Our Other Services" />
		<!-- <h3 class="text-black-12 text-4xl arapey font-semibold mb-xl">Our Other Services</h3> -->
		<p class="text-lg text-black-11 mb-2xl">A Spruce For All Seasons</p>

		<h4 class="text-black-11 text-2xl font-medium mb-lg">A la carte</h4>
		<h4 class="text-black-11 text-2xl font-medium mb-lg">Mantels</h4>
		<h4 class="text-black-11 text-2xl font-medium mb-lg">Banisters</h4>
		<h4 class="text-black-11 text-2xl font-medium mb-lg">Doorways</h4>
		<h4 class="text-black-11 text-2xl font-medium mb-lg">Porches</h4>
		<h3 class="text-primary-12 text-4xl arapey font-semibold mb-lg">Year Round Services</h3>
		<p class="text-lg text-black-11 mb-md">
			We offer a variety of year round services. Feel free to reach out with questions!
		</p>
		<ol class="list-decimal space-y-sm list-inside text-lg text-black-11 mb-lg">
			<li>Theme Parties</li>
			<li>Seasonal Tree's</li>
			<li>Event Planning</li>
		</ol>
		<Button accent>Book A Consultation</Button>
	</div>
</div>
