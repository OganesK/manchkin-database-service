import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';

@Table
export class CurseCard extends Model<CurseCard> {
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

  @ForeignKey(() => ExtraAddition)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    extraAdditionId: number;

  @BelongsTo(() => ExtraAddition)
    extraAddition: ExtraAddition;
}
