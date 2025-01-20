<script lang="ts">
	import { ConnectorItem as BaseConnectorItem, ConnectorArea } from 'nodes-editor';
	import type { Connector } from '../data/Connector.js';
	import ConnectorJoint from './ConnectorJoint.svelte';

	interface Props {
		connector: Connector;
	}

	const { connector }: Props = $props();
</script>

<ConnectorArea {connector}>
	<div class="flex flex-row items-center">
		<BaseConnectorItem {connector}>
			<ConnectorJoint {connector} />
		</BaseConnectorItem>
		{connector.name}
	</div>
</ConnectorArea>
