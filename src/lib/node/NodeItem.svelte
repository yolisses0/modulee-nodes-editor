<script lang="ts">
	import InputItem from '$lib/connector/InputItem.svelte';
	import type { Space } from '$lib/space/Space.js';
	import { NodeItem as BaseNodeItem, ConnectionItem } from 'nodes-editor';
	import ConnectorItem from '../connector/ConnectorItem.svelte';
	import type { Node } from '../data/Node.svelte.js';
	import NodeItemHeader from './NodeItemHeader.svelte';

	interface Props {
		node: Node;
		space: Space;
	}

	const { node, space }: Props = $props();

	const screenPosition = $derived(space.getScreenPosition(node.position));
</script>

<BaseNodeItem position={screenPosition}>
	<div
		style:outline-width="0.1lh"
		style:border-radius="0.4lh"
		class="flex flex-col break-words bg-zinc-600 outline outline-zinc-700"
	>
		<NodeItemHeader {node} {space} />
		{#each node.outputs as output (output.id)}
			<ConnectorItem connector={output} />
		{/each}
		{#each node.inputs as input (input.id)}
			<InputItem {input} />
		{/each}
	</div>
</BaseNodeItem>

{#each node.inputs as input (input.id)}
	{#if input.connectedOutputId}
		<ConnectionItem
			connection={{
				id: input.id + 'connectedOutput',
				startConnectorId: input.id,
				endConnectorId: input.connectedOutputId
			}}
		/>
	{/if}
{/each}
