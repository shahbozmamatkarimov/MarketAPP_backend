import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private readonly regionRepository: typeof Region) { }

  create(createRegionDto: CreateRegionDto) {
    return this.regionRepository.create(createRegionDto);
  }

  findAll() {
    return this.regionRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.regionRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionRepository.update(updateRegionDto, { where: { id } });
  }

  remove(id: number) {
    return this.regionRepository.destroy({where: { id } });
  }
}
