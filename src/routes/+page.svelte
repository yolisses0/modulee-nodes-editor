<script lang="ts">
	import { Editor } from '$lib/index.js';
	import { devEditorData } from '../dev/devEditorData.js';
	import NodesPage from '../lib/node/NodesPage.svelte';

	const editor = new Editor(devEditorData);
	const projectId = 'devProject';
</script>

<NodesPage {editor} {projectId} />
