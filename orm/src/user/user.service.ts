import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Users)
        private userRepo: Repository<Users>
    ) { }

    create(users: Partial<Users>) {
        return this.userRepo.save(users);
    }

    findAll() {
        return this.userRepo.find();
    }

    findOne(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    async remove(id: number) {
        await this.userRepo.delete(id);
        return { deleted: true };
    }

    async update(id: number, data: Partial<Users>) {
        await this.userRepo.update(id, data);
        return this.findOne(id);
    }
}
