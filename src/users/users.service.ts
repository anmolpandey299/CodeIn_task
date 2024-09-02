import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}
    
    async create(createUserDto: CreateUserDto): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const user = this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
        });
        return this.usersRepository.save(user);
    }
    
    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { username } });
    }
}
    






  