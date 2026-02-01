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
      isGlobal: true, // Esto hace que no tengas que importar ConfigModule en otros módulos
    }),

    // Configuración de la conexión a Supabase
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/data/entities/**/*.entity{.ts,.js}'], // Entidades en la capa de datos
      synchronize: true, // Auto-crea las tablas en Supabase (solo desarrollo)
      ssl: {
        rejectUnauthorized: false, // Necesario para la conexión segura con Supabase
      },
    }),

    // Registro de entidades para inyección de repositorios
    TypeOrmModule.forFeature([Job, Service]),
  ],
  controllers: [AppController, JobsController, ServicesController], // Controllers de la capa API
  providers: [AppService, JobsService, ServicesService], // Services de la capa Business
})
export class AppModule { }
