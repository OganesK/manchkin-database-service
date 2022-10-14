import { Model } from 'sequelize-typescript';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';
export declare class CurseCard extends Model<CurseCard> {
    name: string;
    description: string;
    extraAdditionId: number;
    extraAddition: ExtraAddition;
}
