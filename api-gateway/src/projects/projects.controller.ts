import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly service: ProjectsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    create(@Body() body: any) {
        return this.service.create(body);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: any) {
        return this.service.update(id, data);
    }
}
