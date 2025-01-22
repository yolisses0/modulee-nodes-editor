<script lang="ts">
	import type { NodeType } from './NodeType.js';
	import NodeTypeItem from './NodeTypeItem.svelte';

	interface Props {
		nodeTypes: NodeType[];
		onTypeClick: (nodeType: NodeType) => void;
	}

	const { nodeTypes, onTypeClick }: Props = $props();
</script>

{#each nodeTypes as nodeType (nodeType.id)}
	<NodeTypeItem {nodeType} {onTypeClick} />
{/each}
