"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/project.service";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then(setProjects).catch(console.error);
    }, []);

    return (
        <section className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project: any) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}