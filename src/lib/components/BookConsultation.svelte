<script lang="ts">
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Instagram from 'virtual:icons/mdi/instagram';
	import Facebook from 'virtual:icons/mdi/facebook';
	import Twitter from 'virtual:icons/mdi/twitter';
	import InputLong from './InputLong.svelte';
	import InputDropdown from './InputDropdown.svelte';
	import { enhance } from '$app/forms';
	import Check from 'virtual:icons/material-symbols/check-circle-rounded';
	import Error from 'virtual:icons/material-symbols/error-rounded';

	import type { ActionData } from '../../routes/$types';

	export let form: ActionData;
	let loading: boolean = false;
	let formSubmitted = false;
</script>

<div class="px-lg md:px-xl">
	<div class=" py-3xl max-w-screen-xl mx-auto" id="bookconsultation">
		<h3 class="text-black-12 text-4xl arapey font-semibold mb-2xl">Book A Consultation</h3>
		<div class="flex flex-col-reverse space-y-2xl md:space-y-0 md:flex-row md:space-x-3xl justify-between">
			<div class="max-w-sm">
				<!-- <img src="/LogoSVG.svg" class="w-32 mb-xl" /> -->
				<!-- <h4 class="font-semibold mb-md text-lg">Spruce - Seasonal Staging And Decor</h4> -->
				<!-- <p class="text-black-11 mb-lg">We are a full-service seasonal staging and design team bringing the magic of the holidays to your home or office</p> -->
				<div class="  p-lg bg-primary-3 rounded-md">
					<p class="text-primary-12 font-semibold mb-sm text-lg">Email Us</p>
					<p class="text-primary-9">rachel@spruceseasonalstaging.com</p>
					<p class="text-primary-9 mb-lg">info@spruceseasonalstaging.com</p>
					<p class="text-primary-12 font-semibold mb-sm text-lg">Call Us</p>
					<p class="text-primary-9 mb-lg">123-456-7890</p>
					<p class="text-primary-12 font-semibold mb-sm text-lg">Follow Us</p>
					<div class="flex-center space-x-md text-primary-9 text-lg">
						<Instagram />
						<Facebook />
						<Twitter />
					</div>
				</div>
			</div>
			<form
				class="flex flex-col space-y-md flex-1"
				method="POST"
				use:enhance={() => {
					loading = true;

					return ({ result, update }) => {
						loading = false;

						if (result.type === 'success') {
							formSubmitted = true;
						}
						update();
					};
				}}
			>
				<div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
					<Input label="First Name" placeholder="First Name" required />
					<Input label="Last Name" placeholder="Last Name" required />
				</div>
				<Input label="Email" placeholder="Enter Email" required />
				<Input label="Phone" placeholder="Enter Phone" />
				<InputLong label="What's your holiday vision?" placeholder="" required />
				<InputDropdown
					label="How did you hear about us?"
					placeholder="Select Option"
					options={['Select An Option', 'Social Media', 'Word Of Mouth', 'Google Search', 'Other']}
				/>

				{#if !formSubmitted}
					<div class="mx-auto pt-md">
						<div class="w-[165px]">
							<Button extended accent {loading}>Send Message</Button>
						</div>
					</div>
				{/if}

				{#if form?.success}
					<div
						class="flex-center space-x-sm text-primary-9 font-medium mt-md bg-primary-3 p-sm rounded-sm"
					>
						<Check class="text-lg" />
						<p>Thanks for booking a consultation! We'll get back to you shortly</p>
					</div>
				{:else if form?.error}
					<div
						class="flex-center space-x-sm text-red font-medium mt-md bg-redlight p-sm rounded-sm"
					>
						<Error class="text-lg" />
						<p>Sorry, we failed to send the message. Please email us directly instead.</p>
					</div>
				{/if}
			</form>
		</div>
	</div>
</div>
