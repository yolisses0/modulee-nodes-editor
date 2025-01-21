<script lang="ts">
	import NodeList from '$lib/node/NodeList.svelte';
	import { OffsetConverter } from '$lib/space/OffsetConverter.js';
	import { Space } from '$lib/space/Space.js';
	import { Vector } from '$lib/space/Vector.js';
	import { ZoomConverter } from '$lib/space/ZoomConverter.js';
	import { devNodes } from './devNodes.js';

	let zoom = $state(20);

	const space = $derived(
		new Space([new OffsetConverter(new Vector(3, 2)), new ZoomConverter(zoom)]),
	);
</script>

<div class="flex-row border-b border-b-white/10">
	<!-- <UndoButton {editor} /> -->
	<!-- <RedoButton {editor} /> -->
	<!-- <ZoomInButton bind:zoom />
	<ZoomOutButton bind:zoom /> -->
	<!-- <DevButton {editor} /> -->
</div>
<div class="flex min-h-screen flex-col">
	<NodeList nodes={devNodes} {space} />
</div>
