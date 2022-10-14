import { TreasureCard } from './treasure-card.entity';
import { TreasureCardDTO } from './dto/treasure-card.dto';
export declare class TreasureCardService {
    private readonly treasureCardRepository;
    constructor(treasureCardRepository: typeof TreasureCard);
    create(treasureCard: TreasureCardDTO): Promise<TreasureCard>;
    findOneById(id: number): Promise<TreasureCard>;
}
