<script lang="ts">
	import { MoveNodeCommand } from '$lib/commands/MoveNodeCommand.js';
	import { RemoveNodeCommand } from '$lib/commands/RemoveNodeCommand.js';
	import { createId } from '$lib/data/createId.js';
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import type { Space } from '$lib/space/Space.js';
	import { NodeMover as BaseNodeMover, type MoveNodeEvent } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';

	interface Props {
		node: Node;
		space: Space;
		editor: Editor;
	}

	const { node, space, editor }: Props = $props();

	function getMoveDataPosition({ position, initialPosition, initialNodePosition }: MoveNodeEvent) {
		const screenInitialNodePosition = space.getScreenPosition(initialNodePosition);
		const screenPosition = position.add(screenInitialNodePosition).subtract(initialPosition);
		return space.getDataPosition(screenPosition).round();
	}

	function handleMove(e: MoveNodeEvent) {
		const dataPosition = getMoveDataPosition(e);
		node.position = dataPosition;
	}

	function handleEndMove(e: MoveNodeEvent) {
		const dataPosition = getMoveDataPosition(e);
		node.position = dataPosition;

		const moveNodeCommand = new MoveNodeCommand({
			id: createId(),
			type: 'MoveNodeCommand',
			details: { nodeId: node.id, position: dataPosition },
		});
		editor.execute(moveNodeCommand);
	}

	function handleContextMenu(e: MouseEvent) {
		e.preventDefault();

		const removeNodeCommand = new RemoveNodeCommand({
			type: 'RemoveNodeCommand',
			id: createId(),
			details: { nodeId: node.id },
		});
		editor.execute(removeNodeCommand);

		return '';
	}
</script>

<BaseNodeMover
	{node}
	onMove={handleMove}
	onEndMove={handleEndMove}
	oncontextmenu={handleContextMenu}
>
	<div class="hover-bg select-none" style:padding-inline="0.5lh">
		{node.type}
	</div>
</BaseNodeMover>
