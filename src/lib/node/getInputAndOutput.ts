import { Input } from '$lib/data/Input.svelte.js';
import { Output } from '$lib/data/Output.svelte.js';
import type { EndPreviewConnectionEvent } from 'nodes-editor';

export function getInputAndOutput(e: EndPreviewConnectionEvent): { input: Input; output?: Output } {
	if (
		e.startConnector instanceof Input &&
		(e.endConnector === undefined || e.endConnector instanceof Output)
	) {
		return { input: e.startConnector, output: e.endConnector };
	}

	if (
		e.endConnector instanceof Input &&
		(e.startConnector === undefined || e.startConnector instanceof Output)
	) {
		return { input: e.endConnector, output: e.startConnector };
	}

	throw new Error("Can't find valid input and output");
}
