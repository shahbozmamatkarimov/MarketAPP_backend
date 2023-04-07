import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { User } from '../user/entities/user.entity';
import { Like } from '../likes/entities/like.entity';
import { Location } from '../location/entities/location.entity';
import { Card } from '../card/entities/card.entity';
import { Comments } from '../comments/entities/comment.entity';
import { ProductType } from '../product_type/entities/product_type.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Product, User, Like, Location, Card, Comments, ProductType]),
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: {
        expiresIn: '24h'
      },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
