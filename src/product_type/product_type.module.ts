import { Module } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { ProductTypeController } from './product_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductType } from './entities/product_type.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([ProductType]),
  JwtModule.register({
    secret: 'MySecretKey',
    signOptions: {
      expiresIn: '24h'
    },
  }),
  ],
  controllers: [ProductTypeController],
  providers: [ProductTypeService]
})
export class ProductTypeModule { }
