import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';

@Table
export class MonsterCard extends Model<MonsterCard> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    obscenity: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    strength: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    type: string;

  @ForeignKey(() => ExtraAddition)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    extraAdditionId: number;

  @BelongsTo(() => ExtraAddition)
    extraAddition: ExtraAddition;
}
