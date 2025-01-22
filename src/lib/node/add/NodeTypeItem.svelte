<script lang="ts">
	import type { NodeType } from './NodeType.js';

	interface Props {
		nodeType: NodeType;
		onTypeClick: (nodeType: NodeType) => void;
	}

	const { nodeType, onTypeClick }: Props = $props();

	function handleClick() {
		onTypeClick(nodeType);
	}
</script>

<button onclick={handleClick} class="common-button">
	{nodeType.name}
</button>
