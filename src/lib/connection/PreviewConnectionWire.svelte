<script lang="ts">
	import type { Space } from '$lib/space/Space.js';
	import { PreviewConnectionWire as BasePreviewConnectionWire, Vector } from 'nodes-editor';
	import Wire from './Wire.svelte';

	interface Props {
		space: Space;
	}

	const { space }: Props = $props();
</script>

<BasePreviewConnectionWire>
	{#snippet children({
		endPosition,
		startPosition,
	}: {
		endPosition: Vector;
		startPosition: Vector;
	})}
		<Wire {startPosition} {endPosition} {space} />
	{/snippet}
</BasePreviewConnectionWire>
