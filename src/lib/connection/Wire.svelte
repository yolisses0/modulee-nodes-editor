<script lang="ts">
	import { Vector } from '$lib/space/Vector.js';
	import { WirePath, WireSvg } from 'nodes-editor';
	import type { WireProps } from './WireProps.js';
	import { getPathD } from './getPathD.js';

	const { endPosition, startPosition }: WireProps = $props();
</script>

<WireSvg {startPosition} {endPosition} margin={new Vector(10, 10)}>
	<WirePath {getPathD} {startPosition} {endPosition} />
</WireSvg>
