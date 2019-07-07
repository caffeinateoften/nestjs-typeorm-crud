import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Option } from './option.entity';

@Entity()
export class Poll {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Option, option => option.poll)
    options: Option[];

    @Column({ length: 500 })
    question: string;    
}