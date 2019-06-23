import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poll {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    question: string;    
}