import { CurseCardDTO } from './dto/curse-card.dto';
import { CurseCardService } from './curse-card.service';
export declare class CurseCardController {
    private curseCardService;
    constructor(curseCardService: CurseCardService);
    createCurseCard(curseCardData: CurseCardDTO): Promise<import("./curse-card.entity").CurseCard>;
    getCurseCardById(id: number): Promise<import("./curse-card.entity").CurseCard>;
}
