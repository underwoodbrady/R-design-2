<script lang='ts'>
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
	export let form: ActionData;
</script>

<Hero />
<div class=" px-lg md:px-xl  md:my-4xl bg-accent-3 md:max-h-[520px] overflow-hidden">
	<div class="max-w-screen-lg mx-auto flex flex-col md:flex-row space-x-3xl">
		<div class="py-3xl">
			<TitleText text="About Us"/>
			<p class="text-lg text-black-11 mb-lg">
				We are a full-service seasonal staging and design team bringing the magic of the holidays to
				your home or office. From fully decorated custom Christmas trees, mantles, banisters and
				entryways to Thanksgiving tablescapes, and more, Spruce offers a variety of services to help
				take the stress out of your holiday decorating. From planning and shopping of decor to go with
				your existing pieces to complete set-up, take down and storage of your decor for the following
				year.
			</p>
			<Button accent>Meet The Team</Button>
		</div>
	
		<img src="/us.jpg" alt="Our Team" class="max-w-[520px] object-cover hidden md:block"/>
	</div>


</div>

<div class=" px-lg md:px-xl md:pb-4xl md:pt-0 pb-3xl pt-3xl">
	<div class="max-w-screen-lg mx-auto">
		<TitleText text="The Process"/>
	<ol class="list-decimal space-y-md list-inside text-lg text-black-11">
		<li>
			Call <span class="text-accent-9">123-456-7890</span> or use the
			<button class="text-accent-9 underline" on:click={()=>{ document.getElementById('bookconsultation')?.scrollIntoView();}}>Contact Us</button> form for a free consultation. We'll respond within 24 hours to discuss your needs and arrange a meeting time.
		</li>
		<li>Set up your personalized free consultation to discuss your holiday or party decor needs by using the form below. </li>
		<li>We will visit your home or office to go over your design plan and assess your unique space   </li>
		<li>
			After our meeting, we will develop and propose a design plan.
		</li>
		<li>
			Once the plan is approved, we'll add you to our installation calendar. Schedule early, as spots fill up quickly!
		</li>
	</ol>
	</div>
</div>
<Gallery/>
<JoinMailingList/>
<!-- <BookConsultation {form}/> -->
<!-- <Services /> -->
<!-- <RecentProjects /> -->
<style>
	li::marker {
		color: theme('colors.black.12');
		font-weight: 500;
	}
</style>