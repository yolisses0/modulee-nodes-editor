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
		node.position = space.getDataPosition(mousePosition);
		console.log(node.position);
	}
</script>

<div class="hover-bg w-full">
	<BaseNodeMover {node} onMove={handleNodeMove}>
		{node.id}
	</BaseNodeMover>
</div>
