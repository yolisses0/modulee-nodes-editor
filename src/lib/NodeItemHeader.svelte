<script lang="ts">
	import { NodeMover as BaseNodeMover, type OnMoveCallbackParams } from 'nodes-editor';
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

<div class="hover-bg w-full">
	<BaseNodeMover {node} onMove={handleNodeMove}>
		{node.id}
	</BaseNodeMover>
</div>
