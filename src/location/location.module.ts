import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Location } from './entities/location.entity';
import { District } from '../district/entities/district.entity';
import { Region } from '../region/entities/region.entity';
import { Country } from '../country/entities/country.entity';

@Module({
  imports: [SequelizeModule.forFeature([Location, District, Region, Country])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
