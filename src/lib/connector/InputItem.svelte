<script lang="ts">
	import type { Input } from '$lib/data/Input.svelte.js';
	import { ConnectionItem as BaseConnectionItem } from 'nodes-editor';
	import ConnectorItem from './ConnectorItem.svelte';

	interface Props {
		input: Input;
	}

	const { input }: Props = $props();

	console.log(input);
</script>

<ConnectorItem connector={input} />

{#if input.connectedOutputId}
	<BaseConnectionItem
		connection={{
			id: input.id + 'connectedOutput',
			startConnectorId: input.id,
			endConnectorId: input.connectedOutputId
		}}
	/>
{/if}
