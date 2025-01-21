<script lang="ts">
	import { SetInputConnectedOutput } from '$lib/commands/SetInputConnectedOutput.js';
	import PreviewConnectionWire from '$lib/connection/PreviewConnectionWire.svelte';
	import { createId } from '$lib/data/createId.js';
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import type { Space } from '$lib/space/Space.js';
	import { NodeList as BaseNodeList, type EndPreviewConnectionEvent } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';
	import AddNodeMenuWrapper from './AddNodeMenuWrapper.svelte';
	import { getInputAndOutput } from './getInputAndOutput.js';
	import { getScreenFontSize } from './getScreenFontSize.js';
	import { getScreenLineHeight } from './getScreenLineHeight.js';
	import NodeItem from './NodeItem.svelte';

	interface Props {
		space: Space;
		nodes: Node[];
		editor: Editor;
	}

	let mouseEvent = $state<MouseEvent>();
	const { nodes, space, editor }: Props = $props();

	function handleEndPreviewConnection(e: EndPreviewConnectionEvent) {
		const { input, output } = getInputAndOutput(e);
		const command = new SetInputConnectedOutput({
			id: createId(),
			type: 'SetInputConnectedOutput',
			details: { inputId: input.id, outputId: output?.id },
		});
		editor.execute(command);
	}

	function handleContextMenu(e: MouseEvent) {
		e.preventDefault();
		mouseEvent = e;
	}
</script>

<div
	class="flex flex-1 flex-col"
	style:font-size={getScreenFontSize(space) + 'px'}
	style:line-height={getScreenLineHeight(space) + 'px'}
>
	<BaseNodeList oncontextmenu={handleContextMenu} onEndPreview={handleEndPreviewConnection}>
		{#each nodes as node (node.id)}
			<NodeItem {node} {space} {editor} />
		{/each}
		<PreviewConnectionWire {space} />
		<AddNodeMenuWrapper {mouseEvent} />
	</BaseNodeList>
</div>

<style lang="postcss">
	:global(.node-list) {
		background-size: 1lh 1lh;
		background-position: 0.5lh 0.5lh;
		background-image: radial-gradient(circle, #8888 0.05lh, rgba(0, 0, 0, 0) 0.05lh);
	}
</style>
