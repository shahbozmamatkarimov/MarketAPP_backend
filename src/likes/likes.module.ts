import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Like } from './entities/like.entity';

@Module({
  imports: [SequelizeModule.forFeature([Like])],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule {}
