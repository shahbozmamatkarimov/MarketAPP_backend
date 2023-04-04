import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(@InjectModel(Location) private readonly locationRepository: typeof Location){}
  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.create(createLocationDto);
  }

  findAll() {
    return this.locationRepository.findAll({include: { all: true }});
  }

  findOne(id: number) {
    return this.locationRepository.findByPk(id, {include: { all: true }});
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.locationRepository.update(updateLocationDto, {where: {id}});
  }

  remove(id: number) {
    return this.locationRepository.destroy({where: {id}});
  }
}