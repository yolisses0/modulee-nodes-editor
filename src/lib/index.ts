import type { EditorData } from '$lib/editor/EditorData.js';
import { Node } from './data/Node.svelte.js';
import type { NodeData } from './data/NodeData.js';
import type { CommandData } from './editor/CommandData.js';
import { Editor } from './editor/Editor.svelte.js';

import NodesPage from '$lib/node/NodesPage.svelte';

// TODO check if it makes sense to export NodeData

export { Editor, Node, NodesPage };

export type { CommandData, EditorData, NodeData };
