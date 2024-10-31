<script lang="ts">
    export let text:string;
    export let href:string = "/";
</script>

<a {href} class=" flex-1">
    <div class="h-[440px] w-full object-cover overflow-hidden mb-lg">
        <slot/>

    </div>
    <p class="text-center font-semibold arapey text-2xl text-primary-12">{text}</p>
</a>