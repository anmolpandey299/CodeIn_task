import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // <-- Make sure this is included
  providers: [UsersService],
  controllers: [UsersController],
  exports:[UsersService]
})
export class UsersModule {}
