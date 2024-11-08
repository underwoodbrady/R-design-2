<script>
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';
</script>

<div
	class="relative w-full  px-lg md:px-xl"
>
    <div class=" z-10  flex-center flex-col-reverse md:flex-row justify-center md:justify-between md:space-x-xl max-w-screen-xl mx-auto min-h-[640px] h-[calc(100vh-92px)] max-h-[1080px]">
        <div class="block md:hidden absolute h-full w-full inset-0">
            <img src="/tree8.png" alt="Tree Thing" class="absolute inset-0 w-full h-full object-cover"/>
            <div class="absolute w-full h-full bg-black/45 z-10"/>
        </div>
        <div class="relative z-20 w-full text-center flex-center flex-col justify-center">
            <h2 class="text-accent-5 md:text-ccent-5 text-lg md:text-xl font-semibold uppercase mb-sm md:mb-sm">
                Holiday 2024
            </h2>
            <h3 class="arapey font-semibold text-black-1 md:text-primary-1 text-3xl md:text-5xl leading-tight mb-2xl md:mb-xl max-w-screen-md">
                Let Spruce take the hassle out of your holiday by handling all of your decorating needs
            </h3>
            <div class="flex-center flex-col md:flex-row space-y-md md:space-y-0 md:space-x-md">
                <Button
                accent
                    onClick={() => {
					goto('/bookconsultation');
                }}>Get Spruced!</Button
                >
         
       
            </div>
        </div>
    </div>

    <div class="hidden md:block absolute inset-0 overflow-hidden ">
		<img src="/tempbg2.jpg" alt="Staging" class="absolute w-full h-full object-cover" />
		<div class="absolute w-full h-full bg-black/45"/>
	</div>
</div>
