<script lang="ts">
	import { AddNodeCommand } from '$lib/commands/AddNodeCommand.js';
	import { createId } from '$lib/data/createId.js';
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import { Space } from '$lib/space/Space.js';
	import { createNodeData } from './createNodeData.js';
	import { devNodeTypes } from './devNodeTypes.js';
	import type { NodeType } from './NodeType.js';
	import NodeTypeList from './NodeTypeList.svelte';

	interface Props {
		space: Space;
		editor: Editor;
		projectId: string;
		closeModal: () => void;
	}

	const { space, editor, projectId, closeModal }: Props = $props();

	function handleTypeClick(nodeType: NodeType) {
		const dataPosition = space.getDataPosition(screenPosition).round();
		const nodeData = createNodeData(nodeType, dataPosition);
		const addNodeCommand = new AddNodeCommand({
			projectId,
			id: createId(),
			type: 'AddNodeCommand',
			details: { node: nodeData },
			createdAt: new Date().toJSON(),
		});
		editor.execute(addNodeCommand);
		closeModal();
	}
</script>

<div class="rounded bg-zinc-700">
	<div class="border-b border-b-white/10 p-2">Add node</div>
	<NodeTypeList nodeTypes={devNodeTypes} onTypeClick={handleTypeClick} />
</div>
