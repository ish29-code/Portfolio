// frontend/services/project.service.ts

export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    image_url: string;
    tech_stack: string[];
    github_url?: string;
    live_url?: string;
    created_at?: string;
}

// GET all projects
export async function getProjects(): Promise<Project[]> {
    const res = await fetch("/api/projects", {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    return res.json();
}

// CREATE project
export async function createProject(data: {
    title: string;
    description: string;
}) {
    const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to create project");
    }

    return res.json();
}