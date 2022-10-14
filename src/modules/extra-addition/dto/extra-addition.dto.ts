import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExtraAdditionDTO {
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;
}
