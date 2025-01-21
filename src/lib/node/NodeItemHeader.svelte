<script lang="ts">
	import type { Space } from '$lib/space/Space.js';
	import { NodeMover as BaseNodeMover, type OnMoveCallbackParams } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';

	interface Props {
		node: Node;
		space: Space;
	}

	const { node, space }: Props = $props();

	function handleNodeMove({
		node,
		position,
		initialPosition,
		initialNodePosition,
	}: OnMoveCallbackParams) {
		const screenInitialNodePosition = space.getScreenPosition(initialNodePosition);
		const screenPosition = position.add(screenInitialNodePosition).subtract(initialPosition);
		const dataPosition = space.getDataPosition(screenPosition).round();
		node.position = dataPosition;
	}
</script>

<BaseNodeMover {node} onMove={handleNodeMove}>
	<div class="hover-bg select-none" style:padding-inline="0.5lh">
		{node.id}
	</div>
</BaseNodeMover>
