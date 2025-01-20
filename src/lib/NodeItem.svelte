<script lang="ts">
	import { NodeItem as BaseNodeItem, NodeMover, type OnMoveCallbackParams } from 'nodes-editor';
	import type { Node } from './data/Node.svelte.js';

	interface Props {
		node: Node;
	}

	const { node }: Props = $props();

	function handleNodeMove({
		node,
		initialNodePosition,
		initialMousePosition,
		mousePosition
	}: OnMoveCallbackParams) {
		node.position = initialNodePosition.add(mousePosition.subtract(initialMousePosition));
	}
</script>

<BaseNodeItem {node}>
	<NodeMover {node} onMove={handleNodeMove}>
		<div class="rounded bg-zinc-700">
			{node.id}
		</div>
	</NodeMover>
</BaseNodeItem>
