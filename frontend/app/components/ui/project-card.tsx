"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Project } from "@/services/project-service";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Card className="shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">

            {/* Project Image */}
            {project.image_url && (
                <div className="relative w-full h-48">
                    <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <CardHeader className="text-xl font-semibold text-blue-600">
                {project.title}
            </CardHeader>

            <CardContent className="text-gray-600 space-y-4">
                <p>{project.description}</p>

                {/* Tech Stack */}
                {project.tech_stack && (
                    <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            className="text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-80"
                        >
                            GitHub
                        </a>
                    )}

                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            className="text-sm text-white bg-green-600 px-4 py-2 rounded-lg hover:opacity-80"
                        >
                            Live Demo
                        </a>
                    )}
                </div>

                {project.created_at && (
                    <p className="text-xs text-gray-400">
                        Created: {new Date(project.created_at).toLocaleDateString()}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}