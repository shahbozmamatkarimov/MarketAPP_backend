import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comments } from './entities/comment.entity';
import { User } from '../user/entities/user.entity';
import { Product } from '../product/entities/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([Comments, User, Product])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
