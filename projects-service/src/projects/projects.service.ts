import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';


@Injectable()
export class ProjectsService {
    /*update(id: number, data: any) {
        throw new Error('Method not implemented.');
    }*/
    findBySlug(slug: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Project)
        private repo: Repository<Project>,
    ) { }

    async findAll() {
        return this.repo.find();

    }

    async create(data: { title: string; description: string }) {
        const project = this.repo.create(data);
        return this.repo.save(project);
    }
    async update(id: number, data: Partial<Project>) {
        await this.repo.update(id, data);
        return this.repo.findOne({ where: { id } });
    }
}
