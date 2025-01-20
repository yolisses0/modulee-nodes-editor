<script lang="ts">
	import { ConnectorArea } from 'nodes-editor';
	import type { Connector } from '../data/Connector.js';
	import ConnectorJoint from './ConnectorJoint.svelte';

	interface Props {
		connector: Connector;
		direction: 'left' | 'right';
	}

	const { connector, direction }: Props = $props();
</script>

<ConnectorArea {connector}>
	<div class="relative flex items-center {direction === 'left' ? 'flex-row' : 'flex-row-reverse'}">
		<ConnectorJoint {connector} />
		{connector.name}
	</div>
</ConnectorArea>
