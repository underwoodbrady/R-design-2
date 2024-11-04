<script>
	import { goto } from "$app/navigation";
	import Button from "./Button.svelte";
	import TitleText from "./TitleText.svelte";

</script>

<div class="px-lg md:px-xl py-2xl md:py-3xl bg-accent-3">
    <div class="flex justify-center">

        <TitleText text="Our Recent Work" accent marginLg/>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-md mb-xl w-full max-w-screen-xl mx-auto">
        <div class="w-full h-[520px] bg-primary-3 overflow-hidden">
            <img src="/tree1.png" alt="Tree" class="object-cover w-full h-full"/>
        </div>
        <div class="w-full h-[520px] bg-primary-3 overflow-hidden">
            <img src="/tree3.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-[520px] bg-primary-3 overflow-hidden">
            <img src="/tree8.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
    
        <div class="w-full h-[520px] bg-primary-3 overflow-hidden">
            <img src="/tree4.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-[520px] bg-primary-3 overflow-hidden">
            <img src="/tree9.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>
        <div class="w-full h-[520px] bg-primary-3 overflow-hidden">
            <img src="/tree10.png" alt="Tree" class="object-cover w-full h-full"/>
            
        </div>

    </div>
    <div class="w-full flex justify-center">

        <Button onClick={()=>{goto('/gallery')}} accent>See Full Gallery</Button>
    </div>
</div>
