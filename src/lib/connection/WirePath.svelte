<script lang="ts">
	import { getPathD } from './getPathD.js';
	import type { WireProps } from './WireProps.js';

	const { endPosition, startPosition }: WireProps = $props();

	const pathD = $derived(getPathD(startPosition, endPosition));
</script>

<path d={pathD} stroke="#14532d" fill="transparent" stroke-width="0.25lh" />
<path d={pathD} stroke="#22c55e" fill="transparent" stroke-width="0.15lh" stroke-linecap="round" />
