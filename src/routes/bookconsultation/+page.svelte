<script lang="ts">
	import BookConsultation from "$lib/components/BookConsultation.svelte";
	import type { ActionData } from '../$types';

	export let form: ActionData;

</script>
<BookConsultation {form}/>