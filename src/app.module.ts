import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TreasureCardModule } from './modules/treasure-card/treasure-card.module';
import { MonsterCardModule } from './modules/monster-card/monster-card.module';
import { CurseCardService } from './modules/curse-card/curse-card.service';
import { CurseCardModule } from './modules/curse-card/curse-card.module';
import { CurseCardController } from './modules/curse-card/curse-card.controller';
import { MonsterCardController } from './modules/monster-card/monster-card.controller';
import { TreasureCardController } from './modules/treasure-card/treasure-card.controller';
import { curseCardProvider } from './modules/curse-card/curse-card.provider';
import { treasureCardProvider } from './modules/treasure-card/treasure-card.provider';
import { monsterCardProvider } from './modules/monster-card/monster-card.provider';
import { ExtraAdditionModule } from './modules/extra-addition/extra-addition.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    TreasureCardModule,
    MonsterCardModule,
    CurseCardModule,
    ExtraAdditionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
