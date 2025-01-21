<script lang="ts">
	import PreviewConnectionWire from '$lib/connection/PreviewConnectionWire.svelte';
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import type { Space } from '$lib/space/Space.js';
	import { NodeList as BaseNodeList } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';
	import { getScreenFontSize } from './getScreenFontSize.js';
	import { getScreenLineHeight } from './getScreenLineHeight.js';
	import NodeItem from './NodeItem.svelte';

	interface Props {
		space: Space;
		nodes: Node[];
		editor: Editor;
	}

	const { nodes, space, editor }: Props = $props();

	function handleEndPreview() {}
</script>

<div
	class="flex flex-1 flex-col"
	style:font-size={getScreenFontSize(space) + 'px'}
	style:line-height={getScreenLineHeight(space) + 'px'}
>
	<BaseNodeList>
		{#each nodes as node (node.id)}
			<NodeItem {node} {space} {editor} />
		{/each}
		<PreviewConnectionWire {space} />
	</BaseNodeList>
</div>

<style lang="postcss">
	:global(.node-list) {
		background-size: 1lh 1lh;
		background-position: 0.5lh 0.5lh;
		background-image: radial-gradient(circle, #8888 0.05lh, rgba(0, 0, 0, 0) 0.05lh);
	}
</style>
