//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class messagesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  text: string;

  @Column('text', { nullable: true })
  image: string;

  @Column('text', { nullable: true })
  video: string;
}
