import { Entity, model, property, hasMany } from '@loopback/repository';

import { Horariocurso } from './horariocurso.model';

@model({ settings: { "strict": false } })
export class Recurrencia extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  // Define well-known properties here
  @hasMany(() => Horariocurso)
  horariocursos?: Horariocurso[];

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Recurrencia>) {
    super(data);
  }
}
