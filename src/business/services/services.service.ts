import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../../data/entities/service.entity';
import { CreateServiceDto } from '../../core/dto/services/create-service.dto';
import { UpdateServiceDto } from '../../core/dto/services/update-service.dto';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(Service)
        private readonly servicesRepository: Repository<Service>,
    ) { }

    async create(createDto: CreateServiceDto): Promise<Service> {
        const service = this.servicesRepository.create(createDto);
        return await this.servicesRepository.save(service);
    }

    async findAll(): Promise<Service[]> {
        return await this.servicesRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    async findPopular(): Promise<Service[]> {
        return await this.servicesRepository.find({
            where: { isPopular: true },
            order: { rating: 'DESC' },
        });
    }

    async findByCategory(category: string): Promise<Service[]> {
        return await this.servicesRepository.find({
            where: { category },
            order: { rating: 'DESC' },
        });
    }

    async findBookmarked(): Promise<Service[]> {
        return await this.servicesRepository.find({
            where: { isBookmarked: true },
            order: { createdAt: 'DESC' },
        });
    }

    async findOne(id: string): Promise<Service> {
        const service = await this.servicesRepository.findOne({
            where: { id },
        });

        if (!service) {
            throw new NotFoundException(`Service with ID "${id}" not found`);
        }

        return service;
    }

    async update(id: string, updateDto: UpdateServiceDto): Promise<Service> {
        const service = await this.findOne(id);
        Object.assign(service, updateDto);
        return await this.servicesRepository.save(service);
    }

    async toggleBookmark(id: string): Promise<Service> {
        const service = await this.findOne(id);
        service.isBookmarked = !service.isBookmarked;
        return await this.servicesRepository.save(service);
    }

    async togglePopular(id: string): Promise<Service> {
        const service = await this.findOne(id);
        service.isPopular = !service.isPopular;
        return await this.servicesRepository.save(service);
    }

    async remove(id: string): Promise<void> {
        const service = await this.findOne(id);
        await this.servicesRepository.remove(service);
    }

    async bulkCreate(services: CreateServiceDto[]): Promise<Service[]> {
        const entities = this.servicesRepository.create(services);
        return await this.servicesRepository.save(entities);
    }
}
