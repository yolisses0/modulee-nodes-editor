<script lang="ts">
	import type { Space } from '$lib/space/Space.js';
	import { NodeMover as BaseNodeMover, type OnMoveCallbackParams } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';

	interface Props {
		node: Node;
		space: Space;
	}

	const { node, space }: Props = $props();

	function handleNodeMove({ node, mousePosition }: OnMoveCallbackParams) {
		node.position = space.getDataPosition(mousePosition).round();
		console.log(node.position);
	}
</script>

<BaseNodeMover {node} onMove={handleNodeMove}>
	<div class="hover-bg" style:padding-inline="0.5lh">
		{node.id}
	</div>
</BaseNodeMover>
