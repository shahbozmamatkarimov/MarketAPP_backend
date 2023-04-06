import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LikesModule } from './likes/likes.module';
import { ProductModule } from './product/product.module';
import { CardModule } from './card/card.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { CommentsModule } from './comments/comments.module';
import { LocationModule } from './location/location.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { Admin } from './admin/entities/admin.entity';
import { User } from './user/entities/user.entity';
import { Like } from './likes/entities/like.entity';
import { Product } from './product/entities/product.entity';
import { Card } from './card/entities/card.entity';
import { ProductType } from './product_type/entities/product_type.entity';
import { Comments } from './comments/entities/comment.entity';
import { Location } from './location/entities/location.entity';
import { District } from './district/entities/district.entity';
import { Region } from './region/entities/region.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: '2303',
      database: 'marketapp',
      models: [Admin, User, Like, Product, Card, ProductType, Comments, Location, District, Region],
      autoLoadModels: true,
      logging: true
    }),
    AdminModule,
    UserModule,
    LikesModule,
    ProductModule,
    CardModule,
    ProductTypeModule,
    CommentsModule,
    LocationModule,
    DistrictModule,
    RegionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
