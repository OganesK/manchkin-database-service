import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor (
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create (user: UserDTO): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail (email: string): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: {
        email,
      },
    });
  }

  async findOneById (id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
