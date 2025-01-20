import type { NodeData } from '$lib/data/NodeData.js';

// Node::TimeNode(TimeNode::new(1)),
// Node::ConstantNode(ConstantNode::new(2, 440.)),
// Node::PhaseNode(PhaseNode::new(3, 1, 2)),
// Node::TriangleWaveNode(TriangleWaveNode::new(4, 3)),
// Node::OutputNode(OutputNode::new(5, 4)),
export const devNodesData: NodeData[] = [
	{
		inputs: [],
		id: 'timeNode',
		type: 'TimeNode',
		extras: {},
		position: { x: 0, y: 0 },
		outputs: [{ name: 'output', id: 'timeNodeDefaultOutput' }],
	},
	{
		inputs: [],
		id: 'constantNode',
		type: 'ConstantNode',
		extras: { value: 42 },
		position: { x: 14, y: 4 },
		outputs: [{ name: 'output', id: 'constantNodeDefaultOutput' }],
	},
	{
		extras: {},
		outputs: [],
		id: 'outputNode',
		type: 'OutputNode',
		position: { x: 2, y: 0 },
		inputs: [
			{ id: 'outputNodeInput', name: 'input', connectedOutputId: 'constantNodeDefaultOutput' },
		],
	},
];
