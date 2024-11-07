<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';
	import GalleryScrollImage from './GalleryScrollImage.svelte';
	import TitleText from './TitleText.svelte';
	import { onMount } from 'svelte';

	let scrollContainer: HTMLElement | null;
	let isDragging = false;
	let startX: number;
	let scrollLeft: number;

	export let title: string = 'Our Work';

	function handleMouseDown(e: MouseEvent) {
		if (!scrollContainer) return;
		isDragging = true;
		startX = e.pageX - scrollContainer.offsetLeft;
		scrollLeft = scrollContainer.scrollLeft;
	}

	function handleTouchStart(e: TouchEvent) {
		if (!scrollContainer) return;
		isDragging = true;
		startX = e.touches[0].pageX - scrollContainer.offsetLeft;
		scrollLeft = scrollContainer.scrollLeft;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging || !scrollContainer) return;
		const x = e.pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainer.scrollLeft = scrollLeft - walk;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging || !scrollContainer) return;
		const x = e.touches[0].pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainer.scrollLeft = scrollLeft - walk;
	}

	function handleMouseUp() {
		isDragging = false;
	}

	onMount(() => {
		scrollContainer = document.getElementById('scroll');
		if (scrollContainer) {
			scrollContainer.addEventListener('mousedown', handleMouseDown, { passive: true });
			scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
			scrollContainer.addEventListener('mousemove', handleMouseMove, { passive: true });
			scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
			scrollContainer.addEventListener('mouseup', handleMouseUp, { passive: true });
			scrollContainer.addEventListener('mouseleave', handleMouseUp, { passive: true });
			scrollContainer.addEventListener('touchend', handleMouseUp, { passive: true });
		}
	});
</script>

<div class="px-lg md:px-xl py-2xl md:py-3xl bg-accent-3">
	<div class="max-w-screen-lg mx-auto mb-xl">
		<TitleText text={title} textCenter marginLg />
		<div class="relative">
			<div
				id="scroll"
				class="flex md:space-y-0 md:flex-row space-x-sm md:space-x-md overflow-x-auto cursor-grab active:cursor-grabbing select-none h-96"
			>
				<GalleryScrollImage src="/update1.jpg" caption="Traditional" />
				<GalleryScrollImage src="/update9.jpg" caption="Corporate, Whimsical" />

				<GalleryScrollImage src="/update3.jpg" caption="Custom" />
				<GalleryScrollImage src="/update4.jpg" caption="Traditional" />
				<GalleryScrollImage src="/update5.jpg" caption="Custom" />
				<GalleryScrollImage src="/update6.jpg" caption="Elegant" />
				<GalleryScrollImage src="/update7.jpg" caption="Custom" />
				<GalleryScrollImage src="/update8.jpg" caption="Elegant" />
				<GalleryScrollImage src="/update2.jpg" caption="Corporate" />

				<GalleryScrollImage src="/update10.jpg" caption="Custom" />
				<GalleryScrollImage src="/update11.jpg" caption="Custom" />
				<GalleryScrollImage src="/update12.jpg" caption="Custom" />
				<GalleryScrollImage src="/update13.jpg" caption="Custom" />
				<GalleryScrollImage src="/update14.jpg" caption="Custom" />
			</div>
		</div>
	</div>
	<div class="w-full flex justify-center">
		<Button
			onClick={() => {
				goto('/gallery');
			}}
			accent>See Full Gallery</Button
		>
	</div>
</div>

<style lang="css">
	::-webkit-scrollbar {
		display: none;
	}
</style>
