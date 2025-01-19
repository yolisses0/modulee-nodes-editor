<script lang="ts">
	import { NodeItem } from 'nodes-editor';
	import type { Node } from './data/Node.svelte.js';

	interface Props {
		node: Node;
	}

	const { node }: Props = $props();
</script>

<NodeItem {node}>
	<div class="bg-zinc-800"></div>
</NodeItem>
