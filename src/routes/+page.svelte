<script lang="ts">
	import BookConsultation from '$lib/components/BookConsultation.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Plan from 'virtual:icons/mdi/planner-outline';
	import Tree from 'virtual:icons/mdi/pine-tree-variant';
	import Lights from 'virtual:icons/mdi/string-lights';
	import Ornaments from 'virtual:icons/mdi/ornament';
	import Delivery from 'virtual:icons/mdi/truck-delivery-outline';
	import Decoration from 'virtual:icons/mdi/house-heart';
	import Storage from 'virtual:icons/mdi/stopwatch-secure-outline';
	import type { ActionData } from './$types';
	import TitleText from '$lib/components/TitleText.svelte';
	import Button from '$lib/components/Button.svelte';
	import JoinMailingList from '$lib/components/JoinMailingList.svelte';
	import { goto } from '$app/navigation';
	export let form: ActionData;
</script>

<Hero />
<div class=" px-lg md:px-xl md:my-4xl bg-accent-3 md:max-h-[520px] overflow-hidden">
	<div class="max-w-screen-lg mx-auto flex flex-col md:flex-row space-x-3xl">
		<div class="py-3xl">
			<TitleText text="About Us" />
			<p class="text-lg text-black-11 mb-lg">
				We are a full-service seasonal staging and design team bringing the magic of the holidays to
				your home or office. From fully decorated custom Christmas trees, mantles, banisters and
				entryways to Thanksgiving tablescapes, and more, Spruce offers a variety of services to help
				take the stress out of your holiday decorating. From planning and shopping of decor to go
				with your existing pieces to complete set-up, take down and storage of your decor for the
				following year.
			</p>
			<Button
				accent
				onClick={() => {
					goto('/aboutus');
				}}>Meet The Team</Button
			>
		</div>

		<img src="/us.jpg" alt="Our Team" class="max-w-[520px] object-cover hidden md:block" />
	</div>
</div>

<div class=" px-lg md:px-xl md:pb-4xl md:pt-0 pb-3xl pt-3xl">
	<div class="max-w-screen-lg mx-auto">
		<TitleText text="The Process" />
		<ol class="space-y-lg text-lg text-black-11 mt-xl">
			<li class="flex-center space-x-lg">
				<div class="flex-center justify-center min-w-11 h-11 rounded-full bg-primary-3">
					<p class="text-2xl arapey font-semibold text-primary-12">1.</p>
				</div>
				<p>
					<span class="font-semibold">Personalized Consultation For Home or Business:</span> Use the
					<a class="text-accent-9 underline" href="/bookconsultation">Contact Us</a> form for a free
					consultation. We'll respond within 24 hours to discuss your needs and arrange a meeting time.
				</p>
			</li>
			<li class="flex-center space-x-lg">
				<div class="flex-center justify-center min-w-11 h-11 rounded-full bg-primary-3">
					<p class="text-2xl arapey font-semibold text-primary-12">2.</p>
				</div>
				<p>
				<span class="font-semibold">Design Planning:</span> We will visit your home or office to go over
				your vision, existing decor, color scheme, and budget and develop a design plan that brings your
				holiday vision to life.
			</p>
			</li>
			<li class="flex-center space-x-lg">
				<div class="flex-center justify-center min-w-11 h-11 rounded-full bg-primary-3">
					<p class="text-2xl arapey font-semibold text-primary-12">3.</p>
				</div>
				<p>
				<span class="font-semibold">Design Preparation:</span> Once the plan is approved our team will
				do the shopping for your decor and book your installation date, coordinating with you as needed.
			</p>
			</li>
			<li class="flex-center space-x-lg">
				<div class="flex-center justify-center min-w-11 h-11 rounded-full bg-primary-3">
					<p class="text-2xl arapey font-semibold text-primary-12">4.</p>
				</div>
				<p>

				<span class="font-semibold">Installation Day:</span> Our team will safely handle the professional
				setup of your decor leaving you to enjoy your beautifully decorated holiday home.
				</p>
			</li>
		</ol>
	</div>
</div>
<Gallery />
<JoinMailingList />

<!-- <BookConsultation {form}/> -->
<!-- <Services /> -->
<!-- <RecentProjects /> -->
<style>
	li::marker {
		color: theme('colors.black.12');
		font-weight: 500;
	}
</style>
