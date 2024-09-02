import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        type:'postgres',
        host:configService.get('DB_HOST'),
        port:configService.get('DB_HOST'),
        url: configService.get<string>('DB_URL'),
        entities:[join(process.cwd(),'dist/**/*.entity.js')],
        synchronize:true,
      })

    }),
  
    MoviesModule,
  
    UsersModule,
  
    AuthModule,
  
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
