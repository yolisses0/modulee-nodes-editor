<script lang="ts">
	import { getMouseRelativePosition, getNodeListContext } from 'nodes-editor';
	import AddNodeMenu from './AddNodeMenu.svelte';

	interface Props {
		mouseEvent?: MouseEvent;
	}

	let { mouseEvent = $bindable() }: Props = $props();
	const nodeListContext = getNodeListContext();
	const menuPosition = $derived.by(() => {
		if (!mouseEvent) return;
		if (!nodeListContext.nodeList) return;
		return getMouseRelativePosition(mouseEvent, nodeListContext.nodeList);
	});

	function handleOverlayClick() {
		mouseEvent = undefined;
	}
</script>

{#if menuPosition}
	<button onclick={handleOverlayClick} class="absolute h-full w-full" aria-label="overlay"></button>
	<AddNodeMenu screenPosition={menuPosition}></AddNodeMenu>
{/if}
