import { CurseCardDTO } from './dto/curse-card.dto';
import { CurseCard } from './curse-card.entity';
export declare class CurseCardService {
    private readonly curseCardRepository;
    constructor(curseCardRepository: typeof CurseCard);
    create(curseCard: CurseCardDTO): Promise<CurseCard>;
    findOneById(id: number): Promise<CurseCard>;
}
