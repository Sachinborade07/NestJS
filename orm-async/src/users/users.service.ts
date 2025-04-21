import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { person_id } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(person_id) private personRepo: Repository<person_id>,
    ) { }

    create(name: string): Promise<person_id> {
        const person = this.personRepo.create({ name });
        return this.personRepo.save(person);
    }

    findAll(): Promise<person_id[]> {
        return this.personRepo.find();
    }

}
