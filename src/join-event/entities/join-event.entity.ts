import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('join_events')
export class JoinEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column()
  join: boolean;

  @Column()
  countUser: number;

  @Column()
  event: 'trai' | 'gai';
}
