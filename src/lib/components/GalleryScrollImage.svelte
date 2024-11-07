<script lang="ts">
	export let src: string;
	export let alt: string = 'Christmas Tree';
	export let caption: string | null = null;
</script>

<div class="flex-shrink-0 flex-center flex-col space-y-sm">
	<div class=" w-40 h-full overflow-hidden">
		<img draggable="false" {src} {alt} class="w-full h-full object-cover" />
	</div>
	{#if caption}
		<p class="text-sm text-black-11">{caption}</p>
	{/if}
</div>
