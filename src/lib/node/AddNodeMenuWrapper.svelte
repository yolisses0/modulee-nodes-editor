<script lang="ts">
	import { getMousePosition, getNodeListContext } from 'nodes-editor';
	import AddNodeMenu from './AddNodeMenu.svelte';

	interface Props {
		mouseEvent?: MouseEvent;
	}

	const { mouseEvent }: Props = $props();
	const nodeListContext = getNodeListContext();
	const menuPosition = $derived.by(() => {
		if (!mouseEvent) return;
		if (!nodeListContext.nodeList) return;
		return getMousePosition(mouseEvent, nodeListContext.nodeList);
	});
</script>

{#if menuPosition}
	<AddNodeMenu screenPosition={menuPosition}></AddNodeMenu>
{/if}
