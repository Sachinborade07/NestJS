import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class person_id {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

