import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './entities/region.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Region]),
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: {
        expiresIn: '24h'
      },
    }),
  ],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule { }
