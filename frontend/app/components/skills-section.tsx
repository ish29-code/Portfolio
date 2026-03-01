import { Card, CardContent } from "@/app/components/ui/card";

const skills = [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Microservices",
    "Tailwind",
    "Shadcn UI",
    "Jest",
    "CI/CD",
];

export default function SkillsSection() {
    return (
        <section className="py-20 bg-gray-50 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition">
                        <CardContent>{skill}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}