import { TreasureCardDTO } from './dto/treasure-card.dto';
import { TreasureCardService } from './treasure-card.service';
export declare class TreasureCardController {
    private treasureCardService;
    constructor(treasureCardService: TreasureCardService);
    createTreasureCard(treasureCardData: TreasureCardDTO): Promise<import("./treasure-card.entity").TreasureCard>;
    getTreasureCardById(id: number): Promise<import("./treasure-card.entity").TreasureCard>;
}
