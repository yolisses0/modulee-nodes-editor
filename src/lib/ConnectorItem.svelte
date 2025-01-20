<script lang="ts">
	import { ConnectorItem as BaseConnectorItem } from 'nodes-editor';
	import type { Connector } from './data/Connector.js';

	interface Props {
		connector: Connector;
	}

	const { connector }: Props = $props();
</script>

<BaseConnectorItem {connector}>
	<div>
		{connector.id}
	</div>
</BaseConnectorItem>
