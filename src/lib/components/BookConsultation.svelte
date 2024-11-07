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
	import Info from 'virtual:icons/material-symbols/info-outline-rounded';
	import Error from 'virtual:icons/material-symbols/error-rounded';

	import type { ActionData } from '../../routes/$types';
	import TitleText from './TitleText.svelte';

	export let form: ActionData;
	let loading: boolean = false;
	let formSubmitted = false;
</script>

<div class="px-lg md:px-xl">
	<div class=" pt-3xl pb-xl max-w-screen-xl mx-auto" id="bookconsultation">
		<TitleText text="Book A Consultation" />
	</div>
</div>
<div class="w-full bg-black-3 h-[620px] overflow-hidden">
	<img src="/contact.jpg" alt="Holiday Decor" class="w-full h-full object-cover"/>
</div>
<div class="px-lg md:px-xl">
	<div class="pt-xl pb-3xl max-w-screen-xl mx-auto">
		<p class="text-lg text-black-11 mb-xl">
			Ready to explore our seasonal staging or event planning series for your home or office?
			Connect with our team by completing the form below and we’ll customize a plan for your space.
		</p>
		<div
			class="flex flex-col-reverse space-y-2xl md:space-y-0 md:flex-row md:space-x-3xl justify-between"
		>
			<div class="max-w-sm">
				<!-- <img src="/LogoSVG.svg" class="w-32 mb-xl" /> -->
				<!-- <h4 class="font-semibold mb-md text-lg">Spruce - Seasonal Staging And Decor</h4> -->
				<!-- <p class="text-black-11 mb-lg">We are a full-service seasonal staging and design team bringing the magic of the holidays to your home or office</p> -->
				<div class="  p-lg bg-primary-3 rounded-md">
					<p class="text-primary-12 font-semibold mb-sm text-lg">Email Us</p>
					<p class="text-primary-9">rachel@spruceseasonalstaging.com</p>
					<p class="text-primary-9 mb-lg">info@spruceseasonalstaging.com</p>
					<p class="text-primary-12 font-semibold mb-sm text-lg">Follow Us</p>
					<div class="flex-center space-x-md text-primary-9 text-lg">
						<Instagram />
						<Facebook />
						<!-- <Twitter /> -->
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
				<h4 class="arapey font-semibold text-3xl text-primary-12 mb-sm">Essentials</h4>
				<div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
					<Input label="First Name" placeholder="First Name" required />
					<Input label="Last Name" placeholder="Last Name" required />
				</div>
				<div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
					<Input label="Email" placeholder="Enter Email" required />
					<Input label="Phone" placeholder="Enter Phone" />
				</div>
				<InputDropdown
				name="type"
					label="What type of service would you like?"
					placeholder="Select Option"
					options={[
						'Just A Little Sprucing',
						'Custom Design Tree',
						'Custom Event Planning',
						'Other'
					]}
					required
				/>

				<h4 class="arapey font-semibold text-3xl text-primary-12 mb-sm pt-md">
					Your Home Or Business
				</h4>

				<Input 				name="location"
 				label="Location" placeholder="Your City" required />
				<div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
					<Input
					name="size"

						label="Size of tree or size of space"
						placeholder="Height (ft) of Tree or Size of Space (ft²)"
					/>
					<Input 				name="numpeople"
 					label="If an event, how many people?" placeholder="# of People" />
				</div>

				<h4 class="arapey font-semibold text-3xl text-primary-12 mb-sm pt-md">Budget/Timeline</h4>

				<InputLong name="budget" label="What is your budget and desired timeline?" placeholder="" required />

				<h4 class="arapey font-semibold text-3xl text-primary-12 mb-sm pt-md">Inspiration</h4>
				<InputDropdown
					name="style"
					label="What style best aligns with your vision?"
					placeholder="Select Option"
					options={['Traditional', 'Elegant', 'Whimsical', 'Custom', 'Corporate', 'Other']}
					required
				/>
				<div class="flex-center space-x-sm text-black-11 bg-accent-3 px-md rounded-sm py-sm">
					<Info class="text-accent-9" />
					<p>
						Don't know what style you want yet? Check out our <a
							href="/gallery"
							class="text-accent-9 underline">portfolio here</a
						>! Or select 'other'.
					</p>
				</div>

				<h4 class="arapey font-semibold text-3xl text-primary-12 mb-sm pt-md">
					Project Objectives
				</h4>

				<InputLong
				name="reason"

					label="What is the reason you would like spruce to help you?
"
					placeholder=""
				/>

				{#if !formSubmitted}
					<div class="mx-auto pt-md">
						<div class="w-[165px]">
							<Button extended accent {loading}>Send Inquiry</Button>
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
