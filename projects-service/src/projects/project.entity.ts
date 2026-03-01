import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ unique: true })
    slug: string;

    @Column('text')
    description: string;

    @Column()
    image_url: string;

    @Column('text', { array: true })
    tech_stack: string[];

    @Column({ nullable: true })
    github_url: string;

    @Column({ nullable: true })
    live_url: string;

    @CreateDateColumn()
    created_at: Date;
}