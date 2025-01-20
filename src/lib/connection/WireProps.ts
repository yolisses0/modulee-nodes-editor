import type { Space } from '$lib/space/Space.js';
import type { Vector } from '$lib/space/Vector.js';

export interface WireProps {
	space: Space;
	endPosition: Vector;
	startPosition: Vector;
}
