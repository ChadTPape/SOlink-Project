import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class WeatherData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column('float')
  irradiance: number;

  @Column('float')
  temperature: number;

  @CreateDateColumn()
  timestamp: Date;
}
