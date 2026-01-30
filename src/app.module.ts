import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';

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
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Busca automáticamente tus entidades
      synchronize: true, // Auto-crea las tablas en Supabase (solo desarrollo)
      ssl: {
        rejectUnauthorized: false, // Necesario para la conexión segura con Supabase
      },
    }),

    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
