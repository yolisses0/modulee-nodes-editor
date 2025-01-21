import type { NodeData } from '$lib/data/NodeData.js';

export class AddNodeCommand extends Command<{
	node: NodeData;
}> {
	execute(editorData: EditorData): void {
		editorData.nodes.push(this.details.node);
	}

	undo(editorData: EditorData): void {
		removeById(editorData.nodes, this.details.node.id);
	}
}
