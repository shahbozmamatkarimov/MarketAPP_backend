import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private readonly countryRepository: typeof Country) { }

  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.create(createCountryDto);
  }

  findAll() {
    return this.countryRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.countryRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update(updateCountryDto, { where: { id } });
  }

  remove(id: number) {
    return this.countryRepository.destroy({ where: { id } });;
  }
}
