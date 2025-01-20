import { Vector } from '$lib/space/Vector.js';
import { getVectorsString, getVectorString } from 'nodes-editor';

export function getPathD(startPosition: Vector, endPosition: Vector) {
	let offsetX = (endPosition.x - startPosition.x) / 2;
	offsetX = Math.abs(offsetX);

	const point0 = new Vector(startPosition.x + offsetX, startPosition.y);
	const point1 = new Vector(endPosition.x - offsetX, endPosition.y);

	return (
		'M' + getVectorString(startPosition) + 'C' + getVectorsString([point0, point1, endPosition])
	);
}
