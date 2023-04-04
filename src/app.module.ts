import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LikesModule } from './likes/likes.module';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';
import { CardModule } from './card/card.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { CommentsModule } from './comments/comments.module';
import { LocationModule } from './location/location.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: true
    }),
    AdminModule,
    UserModule,
    LikesModule,
    ProfileModule,
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
