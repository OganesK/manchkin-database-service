import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class ExtraAddition extends Model<ExtraAddition> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    description: string;
}
