"use client";

import { Button } from "@/app/components/ui/button";

export default function HeroSection() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-blue-600">Ishika Deshpande</span>
            </h1>

            <p className="max-w-2xl text-lg text-gray-600 mb-8">
                Full Stack Developer | Backend Enthusiast | Microservices & DevOps Learner
                Building scalable systems with Next.js, NestJS & PostgreSQL.
            </p>

            <div className="flex gap-4">
                <Button size="lg">View Projects</Button>
                <Button variant="outline" size="lg">
                    Contact Me
                </Button>
            </div>
        </section>
    );
}