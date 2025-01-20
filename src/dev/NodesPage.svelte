<script lang="ts">
	import NodeList from '$lib/NodeList.svelte';
	import { devNodes } from './devNodes.js';
</script>

<div class="flex min-h-screen flex-col">
	<NodeList nodes={devNodes} />
</div>
