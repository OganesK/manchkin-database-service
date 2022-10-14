import { ExtraAddition } from './extra-addition.entity';
import { ExtraAdditionDTO } from './dto/extra-addition.dto';
export declare class ExtraAdditionService {
    private readonly extraAdditionRepository;
    constructor(extraAdditionRepository: typeof ExtraAddition);
    create(extraAddition: ExtraAdditionDTO): Promise<ExtraAddition>;
    findOneById(id: number): Promise<ExtraAddition>;
}
