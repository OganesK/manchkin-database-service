import { ExtraAdditionDTO } from './dto/extra-addition.dto';
import { ExtraAdditionService } from './extra-addition.service';
export declare class ExtraAdditionController {
    private extraAdditionService;
    constructor(extraAdditionService: ExtraAdditionService);
    createExtraAddition(extraAdditionData: ExtraAdditionDTO): Promise<import("./extra-addition.entity").ExtraAddition>;
    getExtraAdditionById(id: number): Promise<import("./extra-addition.entity").ExtraAddition>;
}
