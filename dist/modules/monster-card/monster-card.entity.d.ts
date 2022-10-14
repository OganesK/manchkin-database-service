import { Model } from 'sequelize-typescript';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';
export declare class MonsterCard extends Model<MonsterCard> {
    name: string;
    description: string;
    obscenity: string;
    strength: number;
    type: string;
    extraAdditionId: number;
    extraAddition: ExtraAddition;
}
