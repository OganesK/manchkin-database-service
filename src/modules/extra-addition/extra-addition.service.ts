import { Injectable, Inject } from '@nestjs/common';
import { EXTRA_ADDITION_REPOSITORY } from 'src/core/constants';
import { ExtraAddition } from './extra-addition.entity';
import { ExtraAdditionDTO } from './dto/extra-addition.dto';

@Injectable()
export class ExtraAdditionService {
  constructor (
    @Inject(EXTRA_ADDITION_REPOSITORY) private readonly extraAdditionRepository: typeof ExtraAddition,
  ) {}

  async create (extraAddition: ExtraAdditionDTO): Promise<ExtraAddition> {
    return await this.extraAdditionRepository.create(extraAddition);
  }

  async findOneById (id: number): Promise<ExtraAddition> {
    return await this.extraAdditionRepository.findOne({
      where: {
        id,
      },
    });
  }
}
