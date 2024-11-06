<script lang="ts">
    export let text:string;
    export let accent:boolean = false;
    export let white:boolean = false;
    export let marginLg: boolean = false;
    export let textCenter:boolean = false;
</script>
<h3 class="{accent ? "text-accent-12" : white ? "text-white" :"text-black-12"} text-5xl arapey font-bold {marginLg ? "mb-2xl" : "mb-xl"} {textCenter ? "text-center" : "text-left"}">{text}</h3>
