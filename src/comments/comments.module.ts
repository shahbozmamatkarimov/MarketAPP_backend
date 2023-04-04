import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comments } from './entities/comment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Comments])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
