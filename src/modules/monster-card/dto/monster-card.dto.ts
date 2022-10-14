import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MonsterCardDTO {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly obscenity: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly strength: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly extraAdditionId: number;
}
