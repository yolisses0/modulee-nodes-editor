<script lang="ts">
	import { Vector } from '$lib/space/Vector.js';
	import { WireSvg } from 'nodes-editor';
	import WirePath from './WirePath.svelte';
	import type { WireProps } from './WireProps.js';

	const { endPosition, startPosition, space }: WireProps = $props();
</script>

<WireSvg {startPosition} {endPosition} margin={new Vector(10, 10)}>
	<WirePath {startPosition} {endPosition} {space} />
</WireSvg>
