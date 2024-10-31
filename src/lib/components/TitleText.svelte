<script lang="ts">
    export let text:string;
    export let accent:boolean = false;
    export let white:boolean = false;
    export let marginLg: boolean = false;
</script>
<h3 class="{accent ? "text-accent-12" : white ? "text-white" :"text-black-12"} text-4xl arapey font-bold {marginLg ? "mb-2xl" : "mb-lg"}">{text}</h3>
