import type { NodeType } from './NodeType.js';

export const devNodeTypes: NodeType[] = [
	{
		id: 'add',
		name: 'Add',
		defaultExtras: {},
		outputNames: ['sum'],
		inputNames: ['input1', 'input2'],
	},
	{
		id: 'subtract',
		name: 'Subtract',
		defaultExtras: {},
		outputNames: ['difference'],
		inputNames: ['input1', 'input2'],
	},
	{
		id: 'multiply',
		name: 'Multiply',
		defaultExtras: {},
		outputNames: ['product'],
		inputNames: ['input1', 'input2'],
	},
	{
		id: 'divide',
		name: 'Divide',
		defaultExtras: {},
		outputNames: ['quotient'],
		inputNames: ['input1', 'input2'],
	},
];
