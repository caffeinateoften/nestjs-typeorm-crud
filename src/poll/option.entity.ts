import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Poll } from './poll.entity';

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Poll, poll => poll.options)
    poll: Poll;

    @Column({ length: 500 })
    text: string;

    @Column()
    votes: number;
}