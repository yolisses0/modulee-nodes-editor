<script lang="ts">
	import type { Vector } from '$lib/space/Vector.js';

	interface Props {
		screenPosition: Vector;
	}

	const { screenPosition }: Props = $props();
</script>

<div class="absolute" style:top={screenPosition.y + 'px'} style:left={screenPosition.x + 'px'}>
	add node
</div>
