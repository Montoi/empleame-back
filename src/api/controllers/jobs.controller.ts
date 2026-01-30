import { Controller, Post, Body, Get } from '@nestjs/common';
import { JobsService } from '../../business/services/jobs.service';
import { CreateJobDto } from '../../core/dto/jobs/create-job.dto';

@Controller('jobs') // Esto define la ruta base: localhost:3000/jobs
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }

    @Post()
    create(@Body() createJobDto: CreateJobDto) {
        // Aquí recibimos el JSON del cliente y lo mandamos al servicio
        return this.jobsService.create(createJobDto);
    }

    @Get()
    findAll() {
        // Este nos servirá para listar todo lo que hay en Supabase
        return this.jobsService.findAll();
    }
}
