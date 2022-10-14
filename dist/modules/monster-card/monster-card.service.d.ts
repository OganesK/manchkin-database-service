import { MonsterCard } from './monster-card.entity';
import { MonsterCardDTO } from './dto/monster-card.dto';
export declare class MonsterCardService {
    private readonly monsterCardRepository;
    constructor(monsterCardRepository: typeof MonsterCard);
    create(monsterCard: MonsterCardDTO): Promise<MonsterCard>;
    findOneById(id: number): Promise<MonsterCard>;
}
