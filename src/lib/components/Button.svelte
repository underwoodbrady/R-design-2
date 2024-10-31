<script lang="ts">
	export let alternate: boolean = false;
	export let accent: boolean = false;
	export let extended:boolean = false
	export let loading:boolean = false;
	export let onClick: ()=>void = ()=>{};
	import Loading from 'virtual:icons/mdi/loading';

</script>

<button
	class=" px-lg py-md  font-medium border-2 text-sm {extended ? ' w-full flex justify-center' : ''}  {alternate
		? 'text-primary-3 hover:text-primary-4 active:text-primary-5'
		: accent ? 'bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1 border-accent-9 hover:border-accent-10 active:border-accent-11'
		: 'bg-primary-3 hover:bg-primary-4 active:bg-primary-5 text-primary-12 border-primary-3 hover:border-primary-4 active:border-primary-5'}"
		on:click = {onClick}
>
	{#if loading}
	<Loading class="animate-spin"/>
	{:else}

	<slot />
	{/if}
</button>
