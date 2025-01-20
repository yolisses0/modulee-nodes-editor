<script lang="ts">
	import { ConnectorItem as BaseConnectorItem } from 'nodes-editor';
	import type { Connector } from '../data/Connector.js';
	import ConnectorJoint from './ConnectorJoint.svelte';

	interface Props {
		connector: Connector;
	}

	const { connector }: Props = $props();
</script>

<BaseConnectorItem {connector}>
	<div class="flex flex-row items-center">
		<ConnectorJoint {connector} />
		{connector.name}
	</div>
</BaseConnectorItem>
