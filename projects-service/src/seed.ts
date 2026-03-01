import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Project } from './projects/project.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Project],
    synchronize: false,
});

async function seed() {
    await AppDataSource.initialize();
    const repo = AppDataSource.getRepository(Project);

    const projects = [
        {
            title: 'Food Delivery Appilication - DishDelight',
            slug: 'dish-delight',
            description:
                'DishDelight is a comprehensive food delivery application that aims to revolutionize the way users order food. Built using a modern tech stack, this application simplifies the process of ordering food and handling payments.',
            image_url: '/projects/DishDelight.png',
            tech_stack: ['TailwindCSS', 'Reactjs', 'Expressjs', 'Nodejs', 'REST API', 'Git', 'Postman testing API'],
            github_url: 'https://github.com/ish29-code/DishDelight',
            live_url: 'https://dishdelight-frontend-0k5f.onrender.com/',
        },
        {
            title: 'Portfolio Website',
            slug: 'portfolio-website',
            description:
                'A responsive and interactive portfolio website showcasing projects, skills, and experience. Having Microservices architecture with API Gateway, built with Nextjs, Nestjs, Rest API, PostgreSQL, and Docker.',
            image_url: '/projects/portfolio.png',
            tech_stack: ['Nextjs', 'Nestjs', 'PostgreSQL', 'Docker', 'REST API', 'Git'],
            github_url: 'https://github.com/ish29-code/Portfolio',
            live_url: 'https://ishika-portfolio.onrender.com/',
        },
        /*{
            title: 'Travel Safety Route Planner',
            slug: 'travel-safety-route',
            description:
                'Web application that calculates safest and shortest routes with traffic analysis and color-coded mapping system.',
            image_url:
                'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
            tech_stack: ['React', 'Node.js', 'MongoDB', 'Maps API'],
            github_url: 'https://github.com/yourusername/travel-safety',
            live_url: undefined,
        },
        /*{
            title: 'Smart Irrigation IoT System',
            slug: 'smart-irrigation-iot',
            description:
                'IoT-based precision farming system using sensors for automated water control and real-time monitoring.',
            image_url:
                'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            tech_stack: ['IoT', 'Node.js', 'Sensors', 'Cloud Integration'],
            github_url: undefined,
            live_url: undefined,
        },
        {
            title: 'AI Digital Twin Automation',
            slug: 'ai-digital-twin',
            description:
                'AI-powered digital twin platform for productivity automation and system monitoring.',
            image_url:
                'https://images.unsplash.com/photo-1518770660439-4636190af475',
            tech_stack: ['React', 'Node.js', 'AI', 'Express'],
            github_url: undefined,
            live_url: undefined,
        },*/
    ];

    for (const projectData of projects) {
        const exists = await repo.findOne({
            where: { slug: projectData.slug },
        });

        if (!exists) {
            const project = repo.create(projectData);
            await repo.save(project);
            console.log(`✅ Inserted: ${projectData.title}`);
        } else {
            console.log(`⚡ Skipped (already exists): ${projectData.title}`);
        }
    }

    console.log('\n🎉 Seeding completed successfully');
    await AppDataSource.destroy();
}

seed().catch((err) => {
    console.error('❌ Seed failed:', err);
});