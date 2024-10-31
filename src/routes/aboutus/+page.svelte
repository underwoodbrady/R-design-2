<script>
	import Button from "$lib/components/Button.svelte";


	import TitleText from "$lib/components/TitleText.svelte";

</script>
<div class="px-xl py-3xl ">
	<div class="max-w-screen-lg mx-auto flex flex-col md:flex-row space-x-3xl">
		<div class="">
			<TitleText text="Meet The Team"/>
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
	
		<img src="/us.jpg" alt="Our Team" class="max-h-[480px] object-cover hidden md:block"/>
	</div>

</div>
