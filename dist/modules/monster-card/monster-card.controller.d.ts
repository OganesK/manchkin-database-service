import { MonsterCardDTO } from './dto/monster-card.dto';
import { MonsterCardService } from './monster-card.service';
export declare class MonsterCardController {
    private monsterCardService;
    constructor(monsterCardService: MonsterCardService);
    createMonsterCard(monsterCardData: MonsterCardDTO): Promise<import("./monster-card.entity").MonsterCard>;
    getMonsterCardById(id: number): Promise<import("./monster-card.entity").MonsterCard>;
}
