<script lang="ts">
	import { NodeItem as BaseNodeItem } from 'nodes-editor';
	import ConnectorItem from './ConnectorItem.svelte';
	import type { Node } from './data/Node.svelte.js';
	import NodeItemHeader from './NodeItemHeader.svelte';

	interface Props {
		node: Node;
		space: Space;
	}

	const { node }: Props = $props();
</script>

<BaseNodeItem {node}>
	<div class="rounded bg-zinc-700">
		<NodeItemHeader {node} />
		{#each node.outputs as output (output.id)}
			<ConnectorItem connector={output} />
		{/each}
		{#each node.inputs as input (input.id)}
			<ConnectorItem connector={input} />
		{/each}
	</div>
</BaseNodeItem>
