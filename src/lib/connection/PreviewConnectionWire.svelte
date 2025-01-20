<script lang="ts">
	import { PreviewConnectionWire as BasePreviewConnectionWire } from 'nodes-editor';
	import Wire from './Wire.svelte';
	import type { WireProps } from './WireProps.js';
</script>

<BasePreviewConnectionWire>
	{#snippet children({ startPosition, endPosition }: WireProps)}
		<Wire {startPosition} {endPosition} />
	{/snippet}
</BasePreviewConnectionWire>
