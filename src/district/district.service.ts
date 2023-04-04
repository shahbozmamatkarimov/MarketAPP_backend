import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './entities/district.entity';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private readonly districtRrepository: typeof District) { }
  create(createDistrictDto: CreateDistrictDto) {
    return this.districtRrepository.create(createDistrictDto);
  }

  findAll() {
    return this.districtRrepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.districtRrepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtRrepository.update(updateDistrictDto, { where: { id } });
  }

  remove(id: number) {
    return this.districtRrepository.destroy({ where: { id } });
  }
}
