<script lang="ts">
	import PreviewConnectionWire from '$lib/connection/PreviewConnectionWire.svelte';
	import type { Space } from '$lib/space/Space.js';
	import { NodeList as BaseNodeList } from 'nodes-editor';
	import type { Node } from '../data/Node.svelte.js';
	import { getScreenFontSize } from './getScreenFontSize.js';
	import { getScreenLineHeight } from './getScreenLineHeight.js';
	import NodeItem from './NodeItem.svelte';

	interface Props {
		space: Space;
		nodes: Node[];
	}

	const { nodes, space }: Props = $props();
</script>

<div
	class="flex flex-1 flex-col"
	style:font-size={getScreenFontSize(space) + 'px'}
	style:line-height={getScreenLineHeight(space) + 'px'}
>
	<BaseNodeList>
		{#each nodes as node (node.id)}
			<NodeItem {node} {space} />
		{/each}
		<PreviewConnectionWire {space} />
	</BaseNodeList>
</div>
