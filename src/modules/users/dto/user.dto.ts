import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  readonly nickName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
