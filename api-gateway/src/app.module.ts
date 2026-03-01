import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [HttpModule, ProjectsModule],
})
export class AppModule { }
