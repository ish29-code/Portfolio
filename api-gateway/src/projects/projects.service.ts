import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProjectsService {
    constructor(private readonly http: HttpService) { }

    async findAll() {
        const response = await firstValueFrom(
            this.http.get('http://projects-service:3001/projects'),
        );
        return response.data;
    }

    async create(data: any) {
        const response = await firstValueFrom(
            this.http.post('http://projects-service:3001/projects', data),
        );
        return response.data;
    }
    async update(id: number, data: any) {
        const response = await firstValueFrom(
            this.http.patch(
                `http://projects-service:3001/projects/${id}`,
                data,
            ),
        );

        return response.data;
    }
}
