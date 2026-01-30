import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../../data/entities/job.entity';
import { CreateJobDto } from '../../core/dto/jobs/create-job.dto';

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job)
        private readonly jobsRepository: Repository<Job>,
    ) { }

    async create(createJobDto: CreateJobDto) {
        const newJob = this.jobsRepository.create(createJobDto);
        return await this.jobsRepository.save(newJob);
    }

    async findAll() {
        return await this.jobsRepository.find();
    }
}
