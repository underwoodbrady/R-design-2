<script lang="ts">
    export let name:string = "";
	export let options: string[];
	export let selectedOption: string = "";
    export let label:string = "";
    export let placeholder:string = ""
    export let required:boolean = false;
</script>

<div class="flex flex-col w-full">
    <label class="text-sm" for={label}>
        {label}
        {#if required}
            <span class="text-black-11">(required)</span>
        {/if}
    </label>
<select aria-label="Select Option" {placeholder} name={name || label} class="py-sm px-md border border-black-5 rounded-sm outline-none">
	{#each options as option}
		{#if selectedOption == option}
			<option value={option} selected>{option}</option>
		{:else}
			<option value={option}>{option}</option>
		{/if}
	{/each}
</select>
</div>