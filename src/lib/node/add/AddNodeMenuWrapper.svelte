<script lang="ts">
	import type { Editor } from '$lib/editor/Editor.svelte.js';
	import type { Space } from '$lib/space/Space.js';
	import { getMouseRelativePosition, getNodeListContext } from 'nodes-editor';
	import AddNodeMenu from './AddNodeMenu.svelte';

	interface Props {
		space: Space;
		editor: Editor;
		projectId: string;
		mouseEvent?: MouseEvent;
	}

	let { space, editor, projectId, mouseEvent = $bindable() }: Props = $props();
	const nodeListContext = getNodeListContext();
	const menuPosition = $derived.by(() => {
		if (!mouseEvent) return;
		if (!nodeListContext.nodeList) return;
		return getMouseRelativePosition(mouseEvent, nodeListContext.nodeList);
	});

	function closeModal() {
		mouseEvent = undefined;
	}
</script>

{#if menuPosition}
	<button onclick={closeModal} class="absolute h-full w-full" aria-label="overlay"></button>
	<AddNodeMenu screenPosition={menuPosition} {space} {editor} {projectId} {closeModal}
	></AddNodeMenu>
{/if}
