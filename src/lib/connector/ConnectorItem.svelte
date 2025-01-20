<script lang="ts">
	import { ConnectorItem as BaseConnectorItem, ConnectorArea } from 'nodes-editor';
	import type { Connector } from '../data/Connector.js';
	import ConnectorJoint from './ConnectorJoint.svelte';

	interface Props {
		connector: Connector;
		direction: 'left' | 'right';
	}

	const { connector, direction }: Props = $props();
</script>

<ConnectorArea {connector}>
	<div class="flex items-center {direction === 'left' ? 'flex-row' : 'flex-row-reverse'}">
		<BaseConnectorItem {connector}>
			<ConnectorJoint {connector} />
		</BaseConnectorItem>
		{connector.name}
	</div>
</ConnectorArea>
