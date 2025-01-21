import type { EmptyObject } from './EmptyObject.js';

export type CommandData<T = EmptyObject> = {
	id: string;
	type: string;
	details: T;
};
