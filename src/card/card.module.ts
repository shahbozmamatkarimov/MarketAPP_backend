import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './entities/card.entity';

@Module({
  imports: [SequelizeModule.forFeature([Card])],
  controllers: [CardController],
  providers: [CardService]
})
export class CardModule {}
