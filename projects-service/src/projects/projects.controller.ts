import { Controller, Get, Post, Body, Param, Patch, } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly service: ProjectsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':slug')
    findOne(@Param('slug') slug: string) {
        return this.service.findBySlug(slug);
    }

    @Post()
    create(@Body() body: { title: string; description: string }) {
        return this.service.create(body);
    }
    // 🔥 PARTIAL UPDATE
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: any) {
        return this.service.update(id, data);
    }
}
