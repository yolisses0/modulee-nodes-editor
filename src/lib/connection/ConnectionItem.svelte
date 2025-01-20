<script lang="ts">
	import type { Input } from '$lib/data/Input.svelte.js';
	import { ConnectionItem } from 'nodes-editor';
	import Wire from './Wire.svelte';
	import type { WireProps } from './WireProps.js';

	interface Props {
		input: Input;
	}

	const { input }: Props = $props();
</script>

{#if input.connectedOutputId}
	<ConnectionItem
		connection={{
			startConnectorId: input.id,
			id: input.id + 'connectedOutput',
			endConnectorId: input.connectedOutputId
		}}
	>
		{#snippet children({ startPosition, endPosition }: WireProps)}
			<Wire {startPosition} {endPosition} />
		{/snippet}
	</ConnectionItem>
{/if}
