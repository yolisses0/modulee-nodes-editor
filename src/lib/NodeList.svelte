<script lang="ts">
	import { NodeList as BaseNodeList } from 'nodes-editor';
	import type { Node } from './data/Node.svelte.js';
	import NodeItem from './NodeItem.svelte';

	interface Props {
		nodes: Node[];
	}

	const { nodes }: Props = $props();
</script>

<BaseNodeList>
	{#each nodes as node (node.id)}
		<NodeItem {node} />
	{/each}
</BaseNodeList>
