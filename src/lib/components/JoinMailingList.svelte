<script lang="ts">
	import Button from "./Button.svelte";
import Input from "./Input.svelte";
import TitleText from "./TitleText.svelte";
import type { ActionData } from '../../routes/$types';
import { enhance } from '$app/forms';
import Loading from 'virtual:icons/mdi/loading';



export let form: ActionData;
	let loading: boolean = false;
	let formSubmitted = false;
</script>
<div class="px-lg md:px-xl py-3xl bg-primary-9">
    <div class="max-w-screen-xl mx-auto flex-center flex-col">
        <h3 class = "text-white text-4xl arapey font-bold mb-lg text-center">Join Our Mailing List</h3>
        <p class="text-lg text-white mb-lg">Join our mailing list and get access to updates about our work</p>
        <form class="max-w-[720px] flex-center" method="POST"
        use:enhance={() => {
            loading = true;

            return ({ result, update }) => {
                loading = false;

                if (result.type === 'success') {
                    formSubmitted = true;
                }
                update();
            };
        }}>
            <div class="flex-1">
                <Input placeholder="Enter Email" name="Email"/>

            </div>
            <div class="flex-1">
                <button class="h-[42px] px-lg font-medium text-sm bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1">
                    {#if loading}
                    <Loading class="animate-spin"/>
                    {:else}
                        Join List
                    <slot />
                    {/if}
                </button>
            </div>
        </form>
    </div>
</div>