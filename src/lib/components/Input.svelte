<script lang="ts">
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
    <input name={label} {placeholder} {required} class="py-sm px-md border border-black-5 rounded-sm outline-none"/>
</div>
