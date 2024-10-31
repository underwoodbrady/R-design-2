<script>
	import Button from "./Button.svelte";
import Input from "./Input.svelte";
import TitleText from "./TitleText.svelte";

</script>
<div class="px-lg md:px-xl py-3xl bg-primary-9">
    <div class="max-w-screen-xl mx-auto flex-center flex-col">
        <TitleText text="Join Our Mailing List" white/>
        <p class="text-lg text-white mb-lg">Join our mailing list and get access to updates about our work</p>
        <div class="max-w-[720px] flex-center">
            <div class="flex-1">
                <Input placeholder="Enter Email"/>

            </div>
            <div class="flex-1">
                <button class="h-[42px] px-lg font-medium text-sm bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1">
                    Join List
                </button>
            </div>
        </div>
    </div>
</div>