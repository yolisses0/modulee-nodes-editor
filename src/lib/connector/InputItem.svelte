<script lang="ts">
	import type { Input } from '$lib/data/Input.svelte.js';
	import ConnectorItem from './ConnectorItem.svelte';

	interface Props {
		input: Input;
	}

	const { input }: Props = $props();

	console.log(input);
</script>

<ConnectorItem connector={input} />
