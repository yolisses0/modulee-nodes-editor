import type { EditorData } from '$lib/editor/EditorData.js';
import { Node } from './data/Node.svelte.js';
// TODO check if it makes sense to export NodeData
import type { NodeData } from './data/NodeData.js';

import NodesPage from '$lib/node/NodesPage.svelte';

export { Node, NodesPage };

export type { EditorData, NodeData };
