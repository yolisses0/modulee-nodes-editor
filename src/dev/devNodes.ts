import { Node } from '$lib/data/Node.svelte.js';
import { devNodesData } from './devNodesData.js';

export const devNodes = devNodesData.map((nodeData) => new Node(nodeData));
