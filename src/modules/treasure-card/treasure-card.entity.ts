import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';

@Table
export class TreasureCard extends Model<TreasureCard> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    forWho: string;

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
    type: DataType.INTEGER,
    allowNull: false,
  })
    cost: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    bonus: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
    isBig: boolean;

  @Column({
    type: DataType.ENUM,
    values: ['one_hand', 'two_hand', 'head', 'feet', 'body', 'free', 'deck'],
    allowNull: false,
  })
    slot: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    extraAction: string;

  @ForeignKey(() => ExtraAddition)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    extraAdditionId: number;

  @BelongsTo(() => ExtraAddition)
    extraAddition: ExtraAddition;
}
