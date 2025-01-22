<script lang="ts">
	import { AddNodeCommand } from '$lib/commands/AddNodeCommand.js';
	import { createId } from '$lib/data/createId.js';
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import { Space } from '$lib/space/Space.js';
	import type { Vector } from 'nodes-editor';
	import { createNodeData } from './createNodeData.js';
	import { devNodeTypes } from './devNodeTypes.js';
	import type { NodeType } from './NodeType.js';
	import NodeTypeList from './NodeTypeList.svelte';

	interface Props {
		space: Space;
		editor: Editor;
		screenPosition: Vector;
		closeModal: () => void;
	}

	const { space, editor, closeModal, screenPosition }: Props = $props();

	function handleTypeClick(nodeType: NodeType) {
		const dataPosition = space.getDataPosition(screenPosition).round();
		const nodeData = createNodeData(nodeType, dataPosition);
		const addNodeCommand = new AddNodeCommand({
			id: createId(),
			type: 'AddNodeCommand',
			details: { node: nodeData },
		});
		editor.execute(addNodeCommand);
		closeModal();
	}
</script>

<div
	style:top={screenPosition.y + 'px'}
	style:left={screenPosition.x + 'px'}
	class="absolute rounded bg-zinc-700"
>
	<div class="border-b border-b-white/10 p-2">Add node</div>
	<NodeTypeList nodeTypes={devNodeTypes} onTypeClick={handleTypeClick} />
</div>
