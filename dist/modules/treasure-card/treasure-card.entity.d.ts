import { Model } from 'sequelize-typescript';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';
export declare class TreasureCard extends Model<TreasureCard> {
    forWho: string;
    name: string;
    description: string;
    cost: number;
    bonus: string;
    isBig: boolean;
    slot: string;
    extraAction: string;
    extraAdditionId: number;
    extraAddition: ExtraAddition;
}
