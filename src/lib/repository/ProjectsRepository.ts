import type { ProjectData } from '$lib/data/ProjectData.js';

export interface ProjectsRepository {
	getUserProjects(): ProjectData[];
	getProject(id: string): ProjectData;
}
