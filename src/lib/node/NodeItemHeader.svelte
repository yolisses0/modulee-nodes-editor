<script lang="ts">
	import { MoveNodeCommand } from '$lib/commands/MoveNodeCommand.js';
	import { createId } from '$lib/data/createId.js';
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import type { Space } from '$lib/space/Space.js';
	import { NodeMover as BaseNodeMover, type OnMoveCallbackParams } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';

	interface Props {
		node: Node;
		space: Space;
		editor: Editor;
	}

	const { node, space, editor }: Props = $props();

	function getMoveDataPosition({
		position,
		initialPosition,
		initialNodePosition,
	}: OnMoveCallbackParams) {
		const screenInitialNodePosition = space.getScreenPosition(initialNodePosition);
		const screenPosition = position.add(screenInitialNodePosition).subtract(initialPosition);
		return space.getDataPosition(screenPosition).round();
	}

	function handleMove(params: OnMoveCallbackParams) {
		const dataPosition = getMoveDataPosition(params);
		node.position = dataPosition;
	}

	function handleEndMove(params: OnMoveCallbackParams) {
		const dataPosition = getMoveDataPosition(params);
		node.position = dataPosition;

		const moveNodeCommand = new MoveNodeCommand({
			id: createId(),
			type: 'MoveNodeCommand',
			details: { nodeId: node.id, position: dataPosition },
		});
		editor.execute(moveNodeCommand);
	}
</script>

<BaseNodeMover {node} onMove={handleMove} onEndMove={handleEndMove}>
	<div class="hover-bg select-none" style:padding-inline="0.5lh">
		{node.id}
	</div>
</BaseNodeMover>
