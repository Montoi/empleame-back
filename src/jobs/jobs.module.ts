import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar esto
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from './entities/job.entity'; // Importar tu entidad

@Module({
  imports: [TypeOrmModule.forFeature([Job])], // Registrar la entidad aquí
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
