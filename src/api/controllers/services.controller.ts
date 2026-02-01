import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { ServicesService } from '../../business/services/services.service';
import { CreateServiceDto } from '../../core/dto/services/create-service.dto';
import { UpdateServiceDto } from '../../core/dto/services/update-service.dto';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) { }

    @Post()
    create(@Body() createDto: CreateServiceDto) {
        return this.servicesService.create(createDto);
    }

    @Post('bulk')
    bulkCreate(@Body() services: CreateServiceDto[]) {
        return this.servicesService.bulkCreate(services);
    }

    @Get()
    findAll(@Query('category') category?: string) {
        if (category) {
            return this.servicesService.findByCategory(category);
        }
        return this.servicesService.findAll();
    }

    @Get('popular')
    findPopular() {
        return this.servicesService.findPopular();
    }

    @Get('bookmarked')
    findBookmarked() {
        return this.servicesService.findBookmarked();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.servicesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateServiceDto) {
        return this.servicesService.update(id, updateDto);
    }

    @Patch(':id/bookmark')
    toggleBookmark(@Param('id') id: string) {
        return this.servicesService.toggleBookmark(id);
    }

    @Patch(':id/popular')
    togglePopular(@Param('id') id: string) {
        return this.servicesService.togglePopular(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.servicesService.remove(id);
    }
}
