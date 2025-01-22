<script lang="ts">
	import type { Vector } from 'nodes-editor';

	interface Props {
		screenPosition: Vector;
	}

	const { screenPosition }: Props = $props();
</script>

<div
	style:top={screenPosition.y + 'px'}
	style:left={screenPosition.x + 'px'}
	class="absolute rounded bg-zinc-700"
>
	<div class="p-2">Add node</div>
	<hr />
</div>
