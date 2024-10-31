<script lang="ts">
	export let text: string;
	export let href: string;
	export let currentPage: string;
</script>

<li
	class="text-black-7 hover:text-black-6 transition-colors duration-100 uppercase font-medium {currentPage == `${href}`
		? ' text-primary-1'
		: ''}"
>
	<a {href}>{text}</a>
</li>
