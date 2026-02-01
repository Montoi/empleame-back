import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// N-Tier Architecture Imports
import { JobsController } from './api/controllers/jobs.controller';
import { JobsService } from './business/services/jobs.service';
import { Job } from './data/entities/job.entity';

import { ServicesController } from './api/controllers/services.controller';
import { ServicesService } from './business/services/services.service';
import { Service } from './data/entities/service.entity';

@Module({
  imports: [
    // Cargamos las variables de entorno del archivo .env
    ConfigModule.forRoot({
      isGlobal: true, 
    }),

    // Configuración de la conexión a PostgreSQL en Railway
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,             // Variable nativa de Railway
      port: parseInt(process.env.PGPORT || '5432', 10), // Variable nativa de Railway
      username: process.env.PGUSER,         // Variable nativa de Railway
      password: process.env.PGPASSWORD,     // Variable nativa de Railway
      database: process.env.PGDATABASE,     // Variable nativa de Railway
      entities: [__dirname + '/data/entities/**/*.entity{.ts,.js}'],
      synchronize: true, // Esto creará tus tablas automáticamente en la nueva DB
      ssl: {
        rejectUnauthorized: false, // Mantenlo para evitar problemas con certificados internos
      },
    }),

    // Registro de entidades para inyección de repositorios
    TypeOrmModule.forFeature([Job, Service]),
  ],
  controllers: [AppController, JobsController, ServicesController],
  providers: [AppService, JobsService, ServicesService],
})
export class AppModule { }