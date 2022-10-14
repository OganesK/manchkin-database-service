/* eslint-disable no-unused-vars */
import { IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line no-shadow
enum SLOT {
  ONE_HAND = 'one_hand',
  TWO_HAND = 'two_hand',
  HEAD = 'head',
  FEET = 'feet',
  BODY = 'body',
  FREE = 'free',
  DECK = 'deck'
}

export class TreasureCardDTO {
  @IsNotEmpty()
  @ApiProperty()
  readonly forWho: string;

  @IsNotEmpty()
  @ApiProperty()
    name: string;

  @IsNotEmpty()
  @ApiProperty()
    description: string;

  @IsNotEmpty()
  @ApiProperty()
    cost: number;

  @IsNotEmpty()
  @ApiProperty()
    bonus: string;

  @IsNotEmpty()
  @ApiProperty()
    isBig: boolean;

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(SLOT, {
    message: 'Slot can be only ONE_HAND TWO_HAND HEAD FEET BODY FREE DECK',
  })
  readonly slot: SLOT;

  @ApiProperty()
  readonly extraAction: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly extraAdditionId: number;
}
