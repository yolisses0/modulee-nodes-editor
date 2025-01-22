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
		id: 'constant',
		inputNames: [],
		name: 'Constant',
		outputNames: ['value'],
		defaultExtras: { value: 1 },
	},
	{
		id: 'output',
		name: 'Output',
		outputNames: [],
		defaultExtras: {},
		inputNames: ['input'],
	},
	{
		id: 'phase',
		name: 'Phase',
		defaultExtras: {},
		outputNames: ['phase'],
		inputNames: ['time', 'frequency'],
	},
	{
		id: 'sine_wave',
		name: 'SineWave',
		defaultExtras: {},
		inputNames: ['phase'],
		outputNames: ['output'],
	},
	{
		defaultExtras: {},
		id: 'triangle_wave',
		name: 'TriangleWave',
		inputNames: ['phase'],
		outputNames: ['output'],
	},
	{
		name: 'Time',
		inputNames: [],
		id: 'time_node',
		defaultExtras: {},
		outputNames: ['time'],
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
